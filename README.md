# Order and Reservation Web Application

Beginner-friendly capstone starter for:
- Customers: browse products/services, place orders, make reservations.
- Sellers: manage products/services, orders, reservations.
- Admins: oversight and management.

## Current Status

- Frontend runs and shows a starter page.
- Backend runs with health endpoints.
- API routes are scaffolded and currently return `501 Not implemented yet` until your team implements each feature.
- MongoDB, mongo-express, seed script, lint, tests, and CI are set up.

## Project Structure

```text
.
|-- frontend/                 # React + Vite app
|-- backend/                  # Express + MongoDB app
|-- docs/                     # Architecture/API/roles docs
|-- .github/                  # PR template, issue templates, CI workflow
|-- docker-compose.yml        # Full local stack
|-- package.json              # Root scripts for team workflow
`-- Project_plan.md
```

## 1. Required Tools

- Git
- Node.js 20+ and npm 10+
- Docker Desktop (recommended for beginners)

Check versions:

```bash
git --version
node -v
npm -v
docker --version
docker compose version
```

## 2. First-Time Setup

Clone and enter the project:

```bash
git clone <your-repo-url>
cd Team-Collaboration
```

Create env files:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

## 3. Quick Start (Recommended: Docker)

Run everything:

```bash
docker compose up --build
```

Open:
- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:5000/health`
- MongoDB: `mongodb://localhost:27017`
- mongo-express: `http://localhost:8081`

Stop:

```bash
docker compose down
```

If old containers cause problems:

```bash
docker compose down --remove-orphans
```

If Mongo data volume is broken after major image changes:

```bash
docker compose down -v
docker compose up --build
```

## 4. Quick Start (Without Docker)

Install dependencies:

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
```

Run frontend + backend together:

```bash
npm run dev
```

Note: You still need MongoDB running locally for backend features.

## 5. Commands You Will Use Often

From project root:

```bash
npm run dev      # run frontend + backend
npm run lint     # code quality checks
npm run test     # run frontend and backend tests
npm run seed     # insert demo data into MongoDB
npm run format   # check code formatting
```

## 6. Seeded Demo Accounts

After `npm run seed` (or Docker seed), you can use:
- Admin: `admin@example.com`
- Seller: `seller@example.com`
- Customer: `customer@example.com`
- Password for all: `Password123!`

## 7. GitHub Workflow (Important)

For every task:

1. Update local `main`:
```bash
git checkout main
git pull origin main
```
2. Create a branch:
```bash
git checkout -b feat/short-description
```
3. Make changes.
4. Run checks before push:
```bash
npm run lint
npm run test
```
5. Commit and push:
```bash
git add .
git commit -m "feat: short description"
git push -u origin feat/short-description
```
6. Open a Pull Request on GitHub.
7. Fill `.github/PULL_REQUEST_TEMPLATE.md`.
8. Ask at least one teammate for review.
9. Merge only after CI is green.

Branch naming:
- `feat/<short-description>`
- `fix/<short-description>`
- `chore/<short-description>`

## 8. What Is Inside `.github/`

- `.github/workflows/ci.yml`: runs lint + test automatically on pushes/PRs.
- `.github/PULL_REQUEST_TEMPLATE.md`: checklist for PR quality.
- `.github/ISSUE_TEMPLATE/`: ready-made bug/feature forms.
- `.github/CODEOWNERS`: default reviewers/owners (replace placeholders with your real GitHub usernames).

## 9. Team Rules

- Do not commit `.env` files or secrets.
- Keep PRs small and focused.
- Update docs when behavior changes (`README.md`, `docs/`, `Project_plan.md`).
- If you add endpoints, update `docs/api-spec.md`.

## 10. Documentation

- Project plan: `Project_plan.md`
- Architecture: `docs/architecture.md`
- API spec: `docs/api-spec.md`
- Roles and permissions: `docs/roles-and-permissions.md`
