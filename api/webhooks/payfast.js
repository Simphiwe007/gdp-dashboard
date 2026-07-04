// api/webhooks/payfast.js
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Not Allowed');

  res.status(200).send('OK');

  const data = req.body;
  console.log('PayFast ITN received:', data.payment_status, data.m_payment_id);
}
