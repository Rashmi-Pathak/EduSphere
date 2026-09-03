const fs = require('fs');

let f = 'src/lib/actions/examWorkflow.actions.ts';
let c = fs.readFileSync(f, 'utf8');

c = c.replace(/options: q\.type === "FILE"\s*\?\s*\(q\.fileConfig \?\? [^)]+\)\s*:\s*\(q\.options \?\? \[\]\)/g, match => "options: JSON.stringify(" + match.substring(9) + ")");

c = c.replace(/correctAnswer: q\.correctAnswer \?\? \[\]/g, 'correctAnswer: JSON.stringify(q.correctAnswer ?? [])');
c = c.replace(/correctAnswer: q\.correctAnswer,/g, 'correctAnswer: JSON.stringify(q.correctAnswer || []),');

// line 112
c = c.replace(/const isValid = correctAnswer\.includes/g, 'const parsedCorrect = (typeof correctAnswer === "string" ? JSON.parse(correctAnswer) : correctAnswer); const isValid = parsedCorrect.includes');

fs.writeFileSync(f, c);
console.log('Fixed examWorkflow.actions.ts');
