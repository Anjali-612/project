const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/prajwala',
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

module.exports = pool;
