git add package.json package-lock.json
git commit -m "chore: setup project dependencies"

git add tsconfig.json next.config.mjs tailwind.config.ts postcss.config.mjs eslint.config.mjs
git commit -m "chore: add nextjs and typescript config"

git add public/ globals.css src/app/globals.css
git commit -m "style: add public assets and global styles"

git add prisma/
git commit -m "feat(db): add prisma schema and seed script"

git add src/auth.ts src/lib/auth.ts src/lib/clerk-mock-client.tsx src/lib/clerk-mock-server.ts
git commit -m "feat(auth): setup NextAuth and credential provider"

git add src/components/ui/ src/components/forms/
git commit -m "feat(ui): add reusable UI components and forms"

git add src/components/Navbar.tsx src/components/Menu.tsx src/components/DashboardShell.tsx
git commit -m "feat(layout): add dashboard layout components"

git add src/components/
git commit -m "feat(components): add remaining functional components"

git add src/lib/utils.ts src/lib/settings.ts src/lib/pageParams.ts src/lib/prisma.ts
git commit -m "feat(core): add core utilities and database client"

git add src/app/api/
git commit -m "feat(api): add API routes for webhooks and cron"

git add src/lib/actions/student.actions.ts src/lib/actions/parent.actions.ts
git commit -m "feat(actions): add student and parent server actions"

git add src/lib/actions/teacher.actions.ts src/lib/actions/school.actions.ts
git commit -m "feat(actions): add teacher and school server actions"

git add src/lib/actions/
git commit -m "feat(actions): add remaining server actions for entities"

git add src/lib/query-builders/
git commit -m "feat(queries): add modular query builders"

git add src/app/\(dashboard\)/admin/ src/app/\(dashboard\)/super-admin/
git commit -m "feat(pages): add admin dashboard views"

git add src/app/\(dashboard\)/teacher/ src/app/\(dashboard\)/student/ src/app/\(dashboard\)/parent/
git commit -m "feat(pages): add role-specific dashboard views"

git add src/app/sign-in/ src/app/post-login/ src/app/unauthorized/
git commit -m "feat(auth): add login and routing pages"

git add src/app/\(dashboard\)/list/
git commit -m "feat(pages): add list and detail pages for all models"

git add src/app/
git commit -m "feat(app): add root layout and remaining pages"

git add .
git commit -m "chore: final project integrations and bug fixes"
