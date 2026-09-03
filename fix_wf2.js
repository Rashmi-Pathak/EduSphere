const fs = require('fs');
let f = 'src/app/(dashboard)/list/exams/create-workflow/page.tsx';
let c = fs.readFileSync(f, 'utf8');

c = c.replace(/correctAnswer:\s*question\.correctAnswer,/g, 'correctAnswer: typeof question.correctAnswer === "string" ? JSON.parse(question.correctAnswer) : question.correctAnswer,');
c = c.replace(/options:\s*question\.options,/g, 'options: typeof question.options === "string" ? JSON.parse(question.options) : question.options,');

fs.writeFileSync(f, c);
console.log('Fixed correctAnswer in create-workflow');
