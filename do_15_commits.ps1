git add src/lib/actions/aiEvaluation.actions.ts
git commit -m "fix(ts): correct AI evaluation action types"

git add src/lib/actions/examWorkflow.actions.ts
git commit -m "fix(ts): correct exam workflow string types"

git add src/app/\(dashboard\)/list/exams/create-workflow/page.tsx
git commit -m "fix(ts): fix question mappings in create workflow"

git add src/app/\(dashboard\)/list/notifications/page.tsx
git commit -m "fix(ts): adjust notification type definition"

git add src/app/\(dashboard\)/list/subjects/\[id\]/page.tsx
git commit -m "fix(ts): fix section orders parsing"

git add src/app/\(dashboard\)/super-admin/page.tsx
git commit -m "fix(ts): patch missing super admin filters"

git add src/app/post-login/page.tsx
git commit -m "fix(ts): remove stale SchoolStatus import"

git add src/auth.ts
git commit -m "fix(ts): migrate findUnique to findFirst in auth"

git add src/components/BigCalendarContainer.tsx
git commit -m "fix(ts): cast day enum in calendar"

git add src/lib/clerk-mock-client.tsx
git commit -m "fix(ts): patch mock signOut arguments"

git add src/components/Navbar.tsx
git commit -m "fix(ts): handle optional fields on mock user object"

git add src/lib/actions/lesson.actions.ts
git commit -m "fix(ts): fix enum casting in lesson scheduling"

git add src/lib/query-builders/student-query.ts
git commit -m "fix(ts): fix validStatuses array type"

git add fix_final.js fix_final2.js fix_final3.js fix_final4.js fix_wf.js fix_wf2.js
git commit -m "chore: add typescript fix automation scripts"

git add .
git commit -m "chore: catch all remaining uncommitted fixes"

git push -u origin master
