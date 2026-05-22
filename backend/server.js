const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '..')));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const PORT = process.env.PORT || 3000;

// ─── ADMIN AUTH ───
function requireAdmin(req, res, next) {
  const pw = req.headers['x-admin-password'];
  if (pw !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// ════════════════════════════════════════════
// RESIDENTS
// ════════════════════════════════════════════
app.get('/api/residents', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM residents ORDER BY id');
    const { rows: attendanceRows } = await pool.query('SELECT * FROM attendance ORDER BY date');
    const { rows: medicalRows } = await pool.query('SELECT * FROM medical_reports ORDER BY id');
    const { rows: medsRows } = await pool.query('SELECT * FROM medical_meds ORDER BY id');

    const medical = medicalRows.map(m => ({
      ...m,
      resident_id: m.resident_id,
      meds: medsRows.filter(med => med.report_id === m.id).map(med => ({ name: med.name, time: med.time }))
    }));

    res.json({ residents: rows, attendance: attendanceRows, medical });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/residents', requireAdmin, async (req, res) => {
  try {
    const { name, age, gender, joined, health, relation, contact } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO residents (name, age, gender, joined, health, relation, contact) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [name, age || 0, gender || '', joined || '', health || 'Stable', relation || '', contact || '']
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/residents/:id', requireAdmin, async (req, res) => {
  try {
    const { name, age, gender, joined, health, relation, contact } = req.body;
    const { rows } = await pool.query(
      'UPDATE residents SET name=$1, age=$2, gender=$3, joined=$4, health=$5, relation=$6, contact=$7 WHERE id=$8 RETURNING *',
      [name, age, gender, joined, health, relation, contact, req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/residents/:id', requireAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM residents WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// ATTENDANCE
// ════════════════════════════════════════════
app.get('/api/attendance', async (req, res) => {
  try {
    const { date } = req.query;
    let query = 'SELECT * FROM attendance';
    const params = [];
    if (date) {
      query += ' WHERE date=$1';
      params.push(date);
    }
    query += ' ORDER BY date, resident_id';
    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/attendance', requireAdmin, async (req, res) => {
  try {
    const { resident_id, date, status } = req.body;
    const { rows } = await pool.query(
      `INSERT INTO attendance (resident_id, date, status) VALUES ($1,$2,$3)
       ON CONFLICT (resident_id, date) DO UPDATE SET status=$3
       RETURNING *`,
      [resident_id, date, status]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/attendance/bulk', requireAdmin, async (req, res) => {
  try {
    const { date, resident_ids, status } = req.body;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      for (const id of resident_ids) {
        await client.query(
          `INSERT INTO attendance (resident_id, date, status) VALUES ($1,$2,$3)
           ON CONFLICT (resident_id, date) DO UPDATE SET status=$3`,
          [id, date, status]
        );
      }
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// MENU
// ════════════════════════════════════════════
app.get('/api/menu', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM menu ORDER BY array_position(ARRAY[\'Sunday\',\'Monday\',\'Tuesday\',\'Wednesday\',\'Thursday\',\'Friday\',\'Saturday\'], day)');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/menu', requireAdmin, async (req, res) => {
  try {
    const { items } = req.body; // [{ day, breakfast, lunch, snacks, dinner }, ...]
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      for (const item of items) {
        await client.query(
          'UPDATE menu SET breakfast=$1, lunch=$2, snacks=$3, dinner=$4 WHERE day=$5',
          [item.breakfast, item.lunch, item.snacks, item.dinner, item.day]
        );
      }
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// MEDICAL REPORTS
// ════════════════════════════════════════════
app.get('/api/medical', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM medical_reports ORDER BY id');
    const { rows: medsRows } = await pool.query('SELECT * FROM medical_meds ORDER BY id');
    const result = rows.map(r => ({
      ...r,
      meds: medsRows.filter(m => m.report_id === r.id).map(m => ({ name: m.name, time: m.time }))
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/medical', requireAdmin, async (req, res) => {
  try {
    const { resident_id, name, age, checkup, next_checkup, doctor, last_visit, condition, meds } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO medical_reports (resident_id, name, age, checkup, next_checkup, doctor, last_visit, condition) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [resident_id, name, age, checkup, next_checkup, doctor, last_visit, condition]
    );
    const reportId = rows[0].id;
    if (meds && meds.length > 0) {
      for (const m of meds) {
        await pool.query('INSERT INTO medical_meds (report_id, name, time) VALUES ($1,$2,$3)',
          [reportId, m.name, m.time]);
      }
    }
    const { rows: medRows } = await pool.query('SELECT * FROM medical_meds WHERE report_id=$1', [reportId]);
    rows[0].meds = medRows.map(m => ({ name: m.name, time: m.time }));
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/medical/:id', requireAdmin, async (req, res) => {
  try {
    const { name, age, checkup, next_checkup, doctor, last_visit, condition, meds } = req.body;
    const { rows } = await pool.query(
      `UPDATE medical_reports SET name=$1, age=$2, checkup=$3, next_checkup=$4, doctor=$5, last_visit=$6, condition=$7 WHERE id=$8 RETURNING *`,
      [name, age, checkup, next_checkup, doctor, last_visit, condition, req.params.id]
    );
    if (meds) {
      await pool.query('DELETE FROM medical_meds WHERE report_id=$1', [req.params.id]);
      for (const m of meds) {
        await pool.query('INSERT INTO medical_meds (report_id, name, time) VALUES ($1,$2,$3)',
          [req.params.id, m.name, m.time]);
      }
    }
    const { rows: medRows } = await pool.query('SELECT * FROM medical_meds WHERE report_id=$1', [req.params.id]);
    rows[0].meds = medRows.map(m => ({ name: m.name, time: m.time }));
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/medical/:id', requireAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM medical_reports WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// DONORS
// ════════════════════════════════════════════
app.get('/api/donors', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM donors ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/donors', requireAdmin, async (req, res) => {
  try {
    const { name, amount, message, date } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO donors (name, amount, message, date) VALUES ($1,$2,$3,$4) RETURNING *',
      [name, amount || 0, message || '', date || new Date().toISOString().split('T')[0]]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/donors/:id', requireAdmin, async (req, res) => {
  try {
    const { name, amount, message, date } = req.body;
    const { rows } = await pool.query(
      'UPDATE donors SET name=$1, amount=$2, message=$3, date=$4 WHERE id=$5 RETURNING *',
      [name, amount, message, date, req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/donors/:id', requireAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM donors WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// VOLUNTEER SUBMISSIONS
// ════════════════════════════════════════════
app.get('/api/volunteers', requireAdmin, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM volunteer_submissions ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/volunteers', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO volunteer_submissions (name, email, phone, interest, message) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [name, email || '', phone || '', interest || '', message || '']
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// GALLERY FOLDERS
// ════════════════════════════════════════════
app.get('/api/gallery', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM gallery_folders ORDER BY id');
    const result = {};
    rows.forEach(r => {
      result[r.key] = { title: r.title, desc: r.description, images: r.images || [] };
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/gallery', requireAdmin, async (req, res) => {
  try {
    const { key, title, desc, images } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO gallery_folders (key, title, description, images) VALUES ($1,$2,$3,$4) RETURNING *',
      [key, title, desc || '', images || []]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/gallery/:key', requireAdmin, async (req, res) => {
  try {
    const { title, desc, images } = req.body;
    const { rows } = await pool.query(
      'UPDATE gallery_folders SET title=$1, description=$2, images=$3 WHERE key=$4 RETURNING *',
      [title, desc, images, req.params.key]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/gallery/:key', requireAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM gallery_folders WHERE key=$1', [req.params.key]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// MIGRATE: import from localStorage (POST JSON body)
// ════════════════════════════════════════════
app.post('/api/migrate', requireAdmin, async (req, res) => {
  const client = await pool.connect();
  try {
    const { residents, attendance, menu, medical, donors, galleryFolders } = req.body;
    await client.query('BEGIN');

    if (residents) {
      for (const r of residents) {
        await client.query(
          'INSERT INTO residents (id, name, age, gender, joined, health, relation, contact) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO UPDATE SET name=$2',
          [r.id, r.name, r.age, r.gender, r.joined, r.health, r.relation, r.contact]
        );
      }
    }

    if (attendance) {
      for (const [date, records] of Object.entries(attendance)) {
        for (const [residentId, status] of Object.entries(records)) {
          await client.query(
            `INSERT INTO attendance (resident_id, date, status) VALUES ($1,$2,$3) ON CONFLICT (resident_id, date) DO UPDATE SET status=$3`,
            [parseInt(residentId), date, status]
          );
        }
      }
    }

    if (menu) {
      for (const m of menu) {
        await client.query(
          'INSERT INTO menu (day, breakfast, lunch, snacks, dinner) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (day) DO UPDATE SET breakfast=$2, lunch=$3, snacks=$4, dinner=$5',
          [m.day, m.breakfast, m.lunch, m.snacks, m.dinner]
        );
      }
    }

    if (medical) {
      for (const m of medical) {
        const { rows } = await client.query(
          'INSERT INTO medical_reports (id, resident_id, name, age, checkup, next_checkup, doctor, last_visit, condition) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO UPDATE SET name=$3 RETURNING id',
          [m.id, m.residentId, m.name, m.age, m.checkup, m.nextCheckup, m.doctor, m.lastVisit, m.condition]
        );
        if (m.meds) {
          for (const med of m.meds) {
            await client.query('INSERT INTO medical_meds (report_id, name, time) VALUES ($1,$2,$3)',
              [rows[0].id, med.name, med.time]);
          }
        }
      }
    }

    if (donors) {
      for (const d of donors) {
        await client.query(
          'INSERT INTO donors (id, name, amount, message, date, approved) VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT (id) DO UPDATE SET name=$2',
          [d.id, d.name, d.amount, d.message, d.date, d.approved || false]
        );
      }
    }

    if (galleryFolders) {
      for (const [key, data] of Object.entries(galleryFolders)) {
        await client.query(
          'INSERT INTO gallery_folders (key, title, description, images) VALUES ($1,$2,$3,$4) ON CONFLICT (key) DO UPDATE SET title=$2, description=$3, images=$4',
          [key, data.title, data.desc || '', data.images || []]
        );
      }
    }

    await client.query('COMMIT');
    res.json({ success: true });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Migration failed' });
  } finally {
    client.release();
  }
});

// ════════════════════════════════════════════
// STATS
// ════════════════════════════════════════════
app.get('/api/stats', async (req, res) => {
  try {
    const { rows: residentCount } = await pool.query('SELECT COUNT(*)::int FROM residents');
    const total = residentCount[0].count;

    const today = new Date().toISOString().split('T')[0];
    const { rows: presentToday } = await pool.query(
      "SELECT COUNT(*)::int FROM attendance WHERE date=$1 AND status='present'", [today]
    );
    const present = presentToday[0].count;

    const { rows: medicalCount } = await pool.query('SELECT COUNT(*)::int FROM medical_reports');
    const medical = medicalCount[0].count;

    res.json({ stats: { total, present, medical, meals: 3 } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ════════════════════════════════════════════
// AUTH VERIFY
// ════════════════════════════════════════════
app.post('/api/admin/verify', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) return res.json({ success: true });
  res.status(401).json({ error: 'Incorrect password' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
