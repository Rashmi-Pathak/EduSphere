git add src/lib/ai/
git commit -m "feat(ai): add AI evaluation logic"

git add src/lib/lessons/ src/lib/attendance.ts src/lib/attendanceParams.ts
git commit -m "feat(domain): add lessons and attendance logic"

git add src/lib/school.ts src/lib/schoolCalendar.ts src/lib/schoolSettings.ts
git commit -m "feat(domain): add school management logic"

git add src/hooks/ src/i18n/ messages/
git commit -m "feat(ui): add hooks and i18n support"

git add assets/ public/ README.md
git commit -m "docs: add assets and readme"

git add .
git commit -m "chore: add remaining configuration and scripts"

git push -u origin master --force
