// lib/services/whatsapp.js
const D360_BASE_URL = process.env.D360_BASE_URL || 'https://waba-sandbox.360dialog.io/v1/messages';

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    'D360-API-KEY': process.env.D360_API_KEY,
  };
}

async function sendTemplateMessage(to, templateName, params = []) {
  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'template',
    template: {
      name: templateName,
      language: { code: 'en' },
      components: params.length
        ? [{ type: 'body', parameters: params.map((text) => ({ type: 'text', text })) }]
        : [],
    },
  };

  const res = await fetch(D360_BASE_URL, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`WhatsApp send failed: ${JSON.stringify(data)}`);
  return data;
}

module.exports = { sendTemplateMessage };