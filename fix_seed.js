const fs = require('fs');
let content = fs.readFileSync('prisma/seed.ts', 'utf8');

// workingDays array
content = content.replace(/workingDays:\s*\[[\s\S]*?\]/g, "workingDays: JSON.stringify(['SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY'])");

// correctAnswer in questions
content = content.replace(/correctAnswer:\s*\[([^\]]*)\]/g, "correctAnswer: JSON.stringify([])");
// Options
content = content.replace(/options:\s*(\[[^\]]*\])/g, "options: JSON.stringify()");
// Strengths, weaknesses
content = content.replace(/strengths:\s*(\[[^\]]*\])/g, "strengths: JSON.stringify()");
content = content.replace(/weaknesses:\s*(\[[^\]]*\])/g, "weaknesses: JSON.stringify()");
// Sections order
content = content.replace(/sectionsOrder:\s*(\[[^\]]*\])/g, "sectionsOrder: JSON.stringify()");

fs.writeFileSync('prisma/seed.ts', content);
console.log('Fixed seed types');
