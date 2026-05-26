const pool = require('./db');

const residents = [
  { id: 1, name: 'Seshamma Garu', age: 78, gender: 'F', joined: '2018', health: 'Stable', relation: 'Daughter', contact: 'Lakshmi - 9988776655' },
  { id: 2, name: 'Venkateswarlu Garu', age: 82, gender: 'M', joined: '2019', health: 'BP/Diabetes', relation: 'Son', contact: 'Ramesh - 8877665544' },
  { id: 3, name: 'Mangamma Garu', age: 75, gender: 'F', joined: '2019', health: 'Arthritis', relation: 'Son', contact: 'Suresh - 7766554433' },
  { id: 4, name: 'Subba Rao Garu', age: 80, gender: 'M', joined: '2020', health: 'Diabetes', relation: 'Daughter', contact: 'Priya - 6655443322' },
  { id: 5, name: 'Ananthamma Garu', age: 72, gender: 'F', joined: '2020', health: 'Stable', relation: 'Son', contact: 'Krishna - 5544332211' },
  { id: 6, name: 'Ramulu Garu', age: 85, gender: 'M', joined: '2018', health: 'Heart Condition', relation: 'Son', contact: 'Prasad - 4433221100' },
  { id: 7, name: 'Nagarathnamma Garu', age: 70, gender: 'F', joined: '2021', health: 'Stable', relation: 'Daughter', contact: 'Sunitha - 3322110099' },
  { id: 8, name: 'Pullaiah Garu', age: 79, gender: 'M', joined: '2021', health: 'BP', relation: 'Son', contact: 'Mahesh - 2211009988' },
  { id: 9, name: 'Adilakshmi Garu', age: 76, gender: 'F', joined: '2022', health: 'Stable', relation: 'Son', contact: 'Vijay - 1100998877' },
  { id: 10, name: 'Narayana Garu', age: 83, gender: 'M', joined: '2022', health: 'Arthritis/Knee Pain', relation: 'Daughter', contact: 'Anitha - 9988771122' },
  { id: 11, name: 'Rangamma Garu', age: 74, gender: 'F', joined: '2022', health: 'Stable', relation: 'Son', contact: 'Srinivas - 8877662233' },
  { id: 12, name: 'Venkata Ratnam Garu', age: 81, gender: 'M', joined: '2023', health: 'Diabetes/BP', relation: 'Son', contact: 'Raju - 7766553344' },
  { id: 13, name: 'Buchchamma Garu', age: 73, gender: 'F', joined: '2023', health: 'Stable', relation: 'Daughter', contact: 'Padma - 6655444455' },
  { id: 14, name: 'Koteswara Rao Garu', age: 84, gender: 'M', joined: '2023', health: 'Heart/BP', relation: 'Son', contact: 'Vinod - 5544335566' },
  { id: 15, name: 'Subhadramma Garu', age: 71, gender: 'F', joined: '2024', health: 'Stable', relation: 'Son', contact: 'Satish - 4433226677' },
  { id: 16, name: 'Mohan Rao Garu', age: 77, gender: 'M', joined: '2024', health: 'BP', relation: 'Daughter', contact: 'Swapna - 3322117788' },
  { id: 17, name: 'Kanthamma Garu', age: 78, gender: 'F', joined: '2024', health: 'Stable', relation: 'Son', contact: 'Ravi - 2211008899' },
  { id: 18, name: 'Surya Narayana Garu', age: 86, gender: 'M', joined: '2024', health: 'Arthritis', relation: 'Son', contact: 'Harish - 1100999900' },
  { id: 19, name: 'Easwaramma Garu', age: 75, gender: 'F', joined: '2025', health: 'Stable', relation: 'Daughter', contact: 'Radha - 9988770011' },
  { id: 20, name: 'Rama Krishna Garu', age: 80, gender: 'M', joined: '2025', health: 'Diabetes', relation: 'Son', contact: 'Phanindra - 8877661122' },
  { id: 21, name: 'Gowramma Garu', age: 73, gender: 'F', joined: '2025', health: 'Stable', relation: 'Son', contact: 'Venkat - 7766552233' },
  { id: 22, name: 'Veera Raghavulu Garu', age: 82, gender: 'M', joined: '2025', health: 'Heart Condition', relation: 'Daughter', contact: 'Lalitha - 6655443344' },
  { id: 23, name: 'Punnamma Garu', age: 76, gender: 'F', joined: '2026', health: 'Stable', relation: 'Son', contact: 'Naveen - 5544334455' },
  { id: 24, name: 'Siva Nagaiah Garu', age: 79, gender: 'M', joined: '2026', health: 'BP', relation: 'Son', contact: 'Sridhar - 4433225566' }
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const r of residents) {
      await client.query(
        `INSERT INTO residents (id, name, age, gender, joined, health, relation, contact)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
         ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, age=EXCLUDED.age, gender=EXCLUDED.gender, joined=EXCLUDED.joined, health=EXCLUDED.health, relation=EXCLUDED.relation, contact=EXCLUDED.contact`,
        [r.id, r.name, r.age, r.gender, r.joined, r.health, r.relation, r.contact]
      );
    }
    await client.query('COMMIT');
    console.log('Seeded', residents.length, 'residents');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seeding failed:', err);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
