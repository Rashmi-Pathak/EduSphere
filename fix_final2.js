const fs = require('fs');

let f1 = 'src/app/(dashboard)/super-admin/page.tsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/Record<string>/g, 'Record<string, string>');
c1 = c1.replace(/\{ status: \}/g, '{ status: string }');
fs.writeFileSync(f1, c1);

let f2 = 'src/lib/actions/aiEvaluation.actions.ts';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/status:\s*\.FAILED/g, 'status: "FAILED"');
c2 = c2.replace(/status:\s*\.PENDING/g, 'status: "PENDING"');
c2 = c2.replace(/status:\s*\.COMPLETED/g, 'status: "COMPLETED"');
fs.writeFileSync(f2, c2);

console.log('Fixed syntax errors');
