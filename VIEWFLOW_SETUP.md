# ViewFlow System Backend Setup

## Endpoints Added
- `GET/POST /api/webhooks/facebook` - Facebook Lead Ads webhook
- `POST /api/webhooks/payfast` - PayFast payment webhook
- `POST /api/outreach/enroll` - Enroll lead into automation
- `POST /api/outreach/send-due` - Send due outreach messages (cron)
- `POST /api/onboarding/intake` - Trial signup form
- `GET /api/health` - Health check

## Environment Variables
```
D360_API_KEY=your_360dialog_key
D360_BASE_URL=https://waba-sandbox.360dialog.io/v1/messages
FACEBOOK_PAGE_ACCESS_TOKEN=your_token
FACEBOOK_WEBHOOK_VERIFY_TOKEN=random_string
PAYFAST_PASSPHRASE=your_passphrase
CRON_SECRET=your_cron_secret
```

## Next Steps
1. Add `pg` to package.json dependencies
2. Create database tables using `lib/db/schema.sql`
3. Submit WhatsApp templates from `lib/templates/whatsapp-templates.md`
4. Deploy to Polsia

## Testing
```bash
curl https://viewflowos.polsia.app/api/health
```