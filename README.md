# University Application Tracker

Modern full-stack web app for tracking university applications.

## Tech Stack
- Next.js (Pages Router) + TypeScript
- Tailwind CSS
- Prisma ORM (SQLite dev, PostgreSQL ready)
- JWT auth with role-based access (student, parent, admin)

## Getting Started
1. Install deps
```bash
npm install
```
2. Env vars
```bash
DATABASE_URL='file:./dev.db'
JWT_SECRET='dev_secret_change_me'
# Optional integrations
COMMON_APP_TOKEN='your_common_app_token'
OPEN_DATA_KEY='your_open_data_key'
```
3. DB migrate and generate
```bash
npx prisma migrate dev --name init
npx prisma generate
```
4. Dev server
```bash
npm run dev
```
5. Seed demo data (optional)
```bash
npm run seed
```
6. Demo tokens
```bash
curl "/api/auth/demo-login?role=student"
curl "/api/auth/demo-login?role=parent"
```

## API Overview
- Auth: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`
- Student: `GET/POST /api/student/applications`, `PUT/DELETE /api/student/applications/[id]`
- Parent: `GET /api/parent/students`, `GET /api/parent/applications?studentId=...`
- University: `GET /api/universities/search?q=&country=&state=&city=&minRank=&maxRank=&minAcceptance=&maxAcceptance`
- Admin: `POST /api/admin/sync-universities` (requires admin)
  - `GET /api/admin/sync-status` (requires admin)
  - `POST /api/admin/send-deadline-reminders` (requires admin)

## Project Structure
```
/src
  /pages
    /api
      /auth
      /admin
      /student
      /parent
      /universities
    dashboard.tsx
    /parent/view.tsx
    /admin/sync.tsx
    /university/search.tsx
    /application/[id].tsx
  /services
    /integrations
  /lib
/prisma
```

## Switch to PostgreSQL
- Update `.env` `DATABASE_URL` to a Postgres connection string
- Re-run `npx prisma migrate dev`

## Feature Flows
- Login/Logout: cookie-based JWT; protected routes via middleware (`/dashboard`, `/parent/view`, `/admin/*`).
- Parent view: choose a linked student; fetch only that student's applications via `studentId` filter.
- Application detail: timeline (deadline/submitted/decision), requirement checklist, progress bar; 7-day due alerts.
- University search: filter by location/rank/acceptance; integration-ready for Common App/Open Data.
- Admin sync: configure `COMMON_APP_TOKEN` or `OPEN_DATA_KEY`, open `/admin/sync`, click “开始同步” to fetch+upsert.
  - The page polls `/api/admin/sync-status` every 3s to show progress and errors.
  - Integrations use exponential backoff retries.
- Uploads: `GET/POST /api/student/documents` supports essay/transcript uploads (multipart/form-data; fields: applicationId, docType, file)
- Emails: admin can trigger due-in-7-days reminders to students (`/api/admin/send-deadline-reminders`)

## Testing
```bash
npm test
```
