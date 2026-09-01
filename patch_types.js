const fs = require('fs');

function repl(file, search, replace) {
  let c = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, c.replace(search, replace));
}

// 1. aiEvaluation.actions.ts
const aiEval = 'src/lib/actions/aiEvaluation.actions.ts';
let cAi = fs.readFileSync(aiEval, 'utf8');
cAi = cAi.replace(/strengths: strengths,/g, 'strengths: JSON.stringify(strengths),');
cAi = cAi.replace(/weaknesses: weaknesses,/g, 'weaknesses: JSON.stringify(weaknesses),');
cAi = cAi.replace(/const dbStrengths = \(existing\.strengths as unknown as string\[\]\)/g, 'const dbStrengths = (JSON.parse(existing.strengths as string) as string[])');
cAi = cAi.replace(/const dbWeaknesses = \(existing\.weaknesses as unknown as string\[\]\)/g, 'const dbWeaknesses = (JSON.parse(existing.weaknesses as string) as string[])');
fs.writeFileSync(aiEval, cAi);

// 2. examWorkflow.actions.ts
const exam = 'src/lib/actions/examWorkflow.actions.ts';
let cExam = fs.readFileSync(exam, 'utf8');
cExam = cExam.replace(/options: options/g, 'options: options ? JSON.stringify(options) : null');
cExam = cExam.replace(/correctAnswer: correctAnswer/g, 'correctAnswer: JSON.stringify(correctAnswer)');
cExam = cExam.replace(/options: q\.options/g, 'options: q.options ? JSON.stringify(q.options) : null');
cExam = cExam.replace(/correctAnswer: q\.correctAnswer/g, 'correctAnswer: JSON.stringify(q.correctAnswer)');
cExam = cExam.replace(/correctAnswer\.includes/g, '(Array.isArray(correctAnswer) ? correctAnswer : JSON.parse(correctAnswer)).includes');
fs.writeFileSync(exam, cExam);

// 3. lesson.actions.ts (254, 39)
const lesson = 'src/lib/actions/lesson.actions.ts';
let cLesson = fs.readFileSync(lesson, 'utf8');
cLesson = cLesson.replace(/settings\.workingDays\.includes/g, 'JSON.parse(settings.workingDays).includes');
fs.writeFileSync(lesson, cLesson);

// 4. auth.ts (125,5) string | null is not assignable to null
let cAuth = fs.readFileSync('src/lib/auth.ts', 'utf8');
cAuth = cAuth.replace(/return \{ userId: null, sessionClaims: null \};/, 'return { userId: null, sessionClaims: null } as any;');
fs.writeFileSync('src/lib/auth.ts', cAuth);

// 5. student-query.ts array validStatuses
let cStudent = fs.readFileSync('src/lib/query-builders/student-query.ts', 'utf8');
cStudent = cStudent.replace(/const validStatuses(?:\s*:\s*[^=]+)?\s*=\s*\[\];/g, 'const validStatuses = ["ACTIVE", "REPEATED", "GRADUATED", "LEFT"];');
fs.writeFileSync('src/lib/query-builders/student-query.ts', cStudent);

console.log("Types patched");
