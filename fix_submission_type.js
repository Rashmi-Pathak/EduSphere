const fs = require('fs');

const file1 = 'src/app/(dashboard)/list/exams/[examId]/submissions/page.tsx';
if (fs.existsSync(file1)) {
  let c1 = fs.readFileSync(file1, 'utf8');
  c1 = c1.replace(/status:\s*SubmissionStatus/g, 'status: string');
  fs.writeFileSync(file1, c1);
}

const file2 = 'src/app/(dashboard)/list/assignments/[assignmentId]/submissions/page.tsx';
if (fs.existsSync(file2)) {
  let c2 = fs.readFileSync(file2, 'utf8');
  c2 = c2.replace(/status:\s*SubmissionStatus/g, 'status: string');
  fs.writeFileSync(file2, c2);
}

console.log('Fixed SubmissionStatus typing');
