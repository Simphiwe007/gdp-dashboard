// lib/db/outreach.js
const pool = require('./pool');

async function insertJob(job) {
  const { lead_id, type, template_name, params, scheduled_for, status } = job;
  const res = await pool.query(
    `INSERT INTO outreach_jobs (lead_id, type, template_name, params, scheduled_for, status, created_at)
     VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
    [lead_id, type, template_name, JSON.stringify(params), scheduled_for, status]
  );
  return res.rows[0];
}

async function listDueJobs() {
  const res = await pool.query(
    `SELECT * FROM outreach_jobs WHERE status = 'pending' AND scheduled_for <= NOW() ORDER BY scheduled_for ASC`
  );
  return res.rows;
}

async function markSent(id) {
  const res = await pool.query(
    'UPDATE outreach_jobs SET status = $1, sent_at = NOW(), updated_at = NOW() WHERE id = $2 RETURNING *',
    ['sent', id]
  );
  return res.rows[0];
}

async function markFailed(id, errorMsg) {
  const res = await pool.query(
    'UPDATE outreach_jobs SET status = $1, error_message = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
    ['failed', errorMsg, id]
  );
  return res.rows[0];
}

module.exports = { insertJob, listDueJobs, markSent, markFailed };