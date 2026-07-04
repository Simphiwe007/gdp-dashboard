// api/onboarding/intake.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Not Allowed');

  try {
    const { name, email, phone, agency_name } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'name and email required' });
    }

    console.log('New onboarding request:', { name, email, agency_name });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
