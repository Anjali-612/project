<<<<<<< HEAD
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/prajwala',
=======
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres12345@localhost:5433/prajwala',
// });

// pool.on('error', (err) => {
//   console.error('Database pool error:', err);
// });

// module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres12345@localhost:5433/prajwala',
  // 👇 ADD THIS SSL BLOCK HERE
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
>>>>>>> 0d7efb44c327d591c059deb4c8e83fa6d2b0f05d
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

module.exports = pool;
