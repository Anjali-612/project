const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres12345@localhost:5433/prajwala',
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

module.exports = pool;
