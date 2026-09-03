const fs = require('fs');

function repl(file, search, replace) {
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, c.replace(search, replace));
  }
}
function replG(file, search, replace) {
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, c.replace(search, replace));
  }
}

// aiEvaluation.actions.ts
const aiEval = 'src/lib/actions/aiEvaluation.actions.ts';
replG(aiEval, /import\s*\{\s*AiEvaluationStatus\s*,?\s*\}\s*from\s*["']@prisma\/client["'];?/, '');
replG(aiEval, /AiEvaluationStatus\s*,?\s*/g, '');
replG(aiEval, /dbStrengths\.join/g, '(dbStrengths as unknown as string[]).join');
replG(aiEval, /dbWeaknesses\.join/g, '(dbWeaknesses as unknown as string[]).join');

// examWorkflow.actions.ts
const examW = 'src/lib/actions/examWorkflow.actions.ts';
replG(examW, /const isValid = correctAnswer\.includes/g, 'const parsedCorrect = typeof correctAnswer === "string" ? JSON.parse(correctAnswer) : correctAnswer; const isValid = parsedCorrect.includes');
replG(examW, /options:\s*q\.options\s*\?\s*JSON\.stringify\(q\.options\)\s*:\s*null/g, 'options: typeof q.options === "string" ? q.options : JSON.stringify(q.options ?? [])');
replG(examW, /correctAnswer:\s*JSON\.stringify\(q\.correctAnswer(?: \?\? \[\])?\)/g, 'correctAnswer: typeof q.correctAnswer === "string" ? q.correctAnswer : JSON.stringify(q.correctAnswer ?? [])');

// create-workflow/page.tsx
const wfPage = 'src/app/(dashboard)/list/exams/create-workflow/page.tsx';
replG(wfPage, /type: q\.type,/g, 'type: q.type as any,');

// notifications/page.tsx
const notifPage = 'src/app/(dashboard)/list/notifications/page.tsx';
replG(notifPage, /type:\s*NotificationType;/g, 'type: string;');
replG(notifPage, /NotificationType/g, 'string');

// subjects/[id]/page.tsx
const subjPage = 'src/app/(dashboard)/list/subjects/[id]/page.tsx';
replG(subjPage, /sectionsOrder as string\[\]/g, 'JSON.parse(sectionsOrder as string || "[]") as string[]');

// super-admin/page.tsx
const superAdmin = 'src/app/(dashboard)/super-admin/page.tsx';
replG(superAdmin, /SchoolStatus\s*,?\s*/g, '');
replG(superAdmin, /as const/g, '');

// post-login/page.tsx
const postLogin = 'src/app/post-login/page.tsx';
replG(postLogin, /SchoolStatus\s*,?\s*/g, '');

// auth.ts
const authTs = 'src/auth.ts';
let cAuth = fs.readFileSync(authTs, 'utf8');
cAuth = cAuth.replace(/prisma\.admin\.findUnique/g, 'prisma.admin.findFirst');
cAuth = cAuth.replace(/prisma\.teacher\.findUnique/g, 'prisma.teacher.findFirst');
cAuth = cAuth.replace(/prisma\.student\.findUnique/g, 'prisma.student.findFirst');
cAuth = cAuth.replace(/prisma\.parent\.findUnique/g, 'prisma.parent.findFirst');
cAuth = cAuth.replace(/return\s*\{\s*userId:\s*null,\s*sessionClaims:\s*null\s*\}\s*;/g, 'return { userId: null, sessionClaims: null } as any;');
fs.writeFileSync(authTs, cAuth);

// BigCalendarContainer.tsx
const bigCal = 'src/components/BigCalendarContainer.tsx';
replG(bigCal, /day: lesson\.day/g, 'day: lesson.day as any');

// clerk-mock-client.tsx
const clerkClient = 'src/lib/clerk-mock-client.tsx';
replG(clerkClient, /signOut:\s*async\s*\(\)\s*=>/g, 'signOut: async (...args: any[]) =>');
replG(clerkClient, /const\s*useClerk\s*=\s*\(\)\s*=>\s*\{\s*return\s*\{\s*signOut:\s*\(\)\s*=>\s*signOut\(\)/g, 'const useClerk = () => { return { signOut: (...args: any[]) => signOut(args[0])');

// Navbar.tsx
const nav = 'src/components/Navbar.tsx';
replG(nav, /user\?.firstName/g, '((user as any)?.firstName)');
replG(nav, /user\?.lastName/g, '((user as any)?.lastName)');
replG(nav, /user\?.fullName/g, '((user as any)?.fullName)');
replG(nav, /user\?.imageUrl/g, '((user as any)?.imageUrl)');

console.log("TS fixes applied");
