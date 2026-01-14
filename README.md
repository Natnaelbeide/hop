# House of Prayer DMV (HOP DMV)

A professional church website with:

- Member login + personalized dashboard
- Bible tracker (90-day plan, 13–14 chapters/day)
- Prayer tracker
- Telegram bot integration:
  - link accounts
  - /today, /check, /prayer, /prayers, /answered
  - daily reminders at 7:00 AM ET
  - skip reminders if today's reading already completed
  - streak tracking (current + best)
- Admin role:
  - see all member summary stats
  - upload/delete gallery images
- Gallery with real images + upload

## Run locally

```bash
cd server
npm install
cp .env.example .env
# edit .env and set JWT_SECRET + TELEGRAM_BOT_TOKEN
node index.js
```

Open:
- http://localhost:8080

## Make an admin
After you register the pastor account, set role to admin:

SQLite:
```sql
UPDATE users SET role='admin' WHERE email='pastor@yourchurch.com';
```

Or add a temporary admin then use the admin tool route /api/admin/make-admin (admin only).
