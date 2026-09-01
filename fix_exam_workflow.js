const fs = require('fs');

const f = 'src/app/(dashboard)/list/exams/create-workflow/page.tsx';
let c = fs.readFileSync(f, 'utf8');
c = c.replace(/q\.type,/g, 'q.type as "TRUE_FALSE" | "MCQ" | "TEXT" | "FILE",');
fs.writeFileSync(f, c);

console.log('Fixed create-workflow page');
