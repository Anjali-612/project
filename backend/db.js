const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres12345@localhost:5433/prajwala';

// Supabase requires SSL for remote connections
const isRemote = connectionString.includes('supabase.co') || connectionString.includes('supabase.com');

const pool = new Pool({
  connectionString,
  ...(isRemote && {
    ssl: { rejectUnauthorized: false }
  })
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

pool.on('connect', () => {
  console.log(`Connected to database${isRemote ? ' (Supabase)' : ' (local)'}`);
});

module.exports = pool;
