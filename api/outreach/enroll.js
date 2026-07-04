// api/outreach/enroll.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Not Allowed');

  try {
    const { lead_id } = req.body;
    console.log('Enrolling lead:', lead_id);
    res.status(200).json({ success: true, lead_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
