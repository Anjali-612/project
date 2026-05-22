const pool = require('./db');
const fs = require('fs');
const path = require('path');

const schema = `
CREATE TABLE IF NOT EXISTS residents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER DEFAULT 0,
  gender VARCHAR(20) DEFAULT '',
  joined VARCHAR(20) DEFAULT '',
  health VARCHAR(255) DEFAULT 'Stable',
  relation VARCHAR(50) DEFAULT '',
  contact VARCHAR(50) DEFAULT ''
);

CREATE TABLE IF NOT EXISTS attendance (
  id SERIAL PRIMARY KEY,
  resident_id INTEGER REFERENCES residents(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'not-marked',
  UNIQUE(resident_id, date)
);

CREATE TABLE IF NOT EXISTS menu (
  day VARCHAR(20) PRIMARY KEY,
  breakfast TEXT DEFAULT '',
  lunch TEXT DEFAULT '',
  snacks TEXT DEFAULT '',
  dinner TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS medical_reports (
  id SERIAL PRIMARY KEY,
  resident_id INTEGER REFERENCES residents(id) ON DELETE CASCADE,
  name VARCHAR(255) DEFAULT '',
  age INTEGER DEFAULT 0,
  checkup DATE,
  next_checkup DATE,
  doctor VARCHAR(255) DEFAULT '',
  last_visit VARCHAR(100) DEFAULT '',
  condition TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS medical_meds (
  id SERIAL PRIMARY KEY,
  report_id INTEGER REFERENCES medical_reports(id) ON DELETE CASCADE,
  name VARCHAR(255) DEFAULT '',
  time VARCHAR(100) DEFAULT ''
);

CREATE TABLE IF NOT EXISTS donors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  amount INTEGER NOT NULL DEFAULT 0,
  message TEXT DEFAULT '',
  date DATE DEFAULT CURRENT_DATE,
  approved BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS volunteer_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) DEFAULT '',
  phone VARCHAR(50) DEFAULT '',
  interest VARCHAR(255) DEFAULT '',
  message TEXT DEFAULT '',
  date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS gallery_folders (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT '',
  images TEXT[] DEFAULT '{}'
);

CREATE TABLE IF NOT EXISTS settings (
  key VARCHAR(100) PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT INTO settings (key, value) VALUES ('admin_password', 'admin123')
ON CONFLICT (key) DO NOTHING;

-- Insert default menu days
INSERT INTO menu (day, breakfast, lunch, snacks, dinner) VALUES
  ('Sunday', 'Idly, Sambar', 'Rice, Dal, Curry', 'Tea, Biscuits', 'Chapati, Curry'),
  ('Monday', 'Pongal, Chutney', 'Rice, Sambar, Rasam', 'Fruit, Milk', 'Rice, Dal, Curry'),
  ('Tuesday', 'Dosa, Chutney', 'Rice, Curry, Curd', 'Tea, Snacks', 'Chapati, Dal'),
  ('Wednesday', 'Upma, Sambar', 'Rice, Dal, Vegetable', 'Fruit Juice', 'Rice, Curry, Rasam'),
  ('Thursday', 'Idly, Chutney', 'Rice, Sambar, Fry', 'Tea, Biscuits', 'Chapati, Curry'),
  ('Friday', 'Vada, Sambar', 'Rice, Curry, Curd', 'Fruit, Milk', 'Rice, Dal, Curry'),
  ('Saturday', 'Pesarattu, Chutney', 'Rice, Dal, Rasam', 'Tea, Snacks', 'Chapati, Dal')
ON CONFLICT (day) DO NOTHING;
`;

async function initDb() {
  const client = await pool.connect();
  try {
    await client.query(schema);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    client.release();
    pool.end();
  }
}

initDb();
