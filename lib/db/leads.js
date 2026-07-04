// lib/db/leads.js
const pool = require('./pool');

async function insert(lead) {
  const { name, email, phone, source, status } = lead;
  const res = await pool.query(
    'INSERT INTO leads (name, email, phone, source, status, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *',
    [name, email, phone, source, status]
  );
  return res.rows[0];
}

async function findById(id) {
  const res = await pool.query('SELECT * FROM leads WHERE id = $1', [id]);
  return res.rows[0];
}

async function findByEmailOrPhone(email, phone) {
  const res = await pool.query(
    'SELECT * FROM leads WHERE email = $1 OR phone = $2 LIMIT 1',
    [email, phone]
  );
  return res.rows[0];
}

async function listByStatus(status, limit = 50) {
  const res = await pool.query(
    'SELECT * FROM leads WHERE status = $1 ORDER BY created_at DESC LIMIT $2',
    [status, limit]
  );
  return res.rows;
}

async function updateStatus(id, status) {
  const res = await pool.query(
    'UPDATE leads SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
    [status, id]
  );
  return res.rows[0];
}

module.exports = { insert, findById, findByEmailOrPhone, listByStatus, updateStatus };