const fs = require('fs');

let f = 'src/app/(dashboard)/list/exams/create-workflow/page.tsx';
let c = fs.readFileSync(f, 'utf8');

c = c.replace(/type: question\.type,/g, 'type: question.type as any,');

fs.writeFileSync(f, c);
console.log('Fixed create-workflow');
