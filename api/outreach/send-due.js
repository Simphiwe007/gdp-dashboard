// api/outreach/send-due.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Not Allowed');

  if (req.headers['x-cron-secret'] !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  console.log('Processing due outreach jobs...');
  res.status(200).json({ processed: 0 });
}
