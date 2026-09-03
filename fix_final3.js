const fs = require('fs');

let f1 = 'src/app/(dashboard)/super-admin/page.tsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/import Actions from "@\/components\/Actions";/g, 'import Actions from "@/components/SchoolStatusActions";');
c1 = c1.replace(/import Filter from "@\/components\/Filter";/g, 'import Filter from "@/components/SchoolStatusFilter";');
fs.writeFileSync(f1, c1);

let f2 = 'src/lib/actions/aiEvaluation.actions.ts';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/status:\s*\.SUGGESTED/g, 'status: "SUGGESTED"');
fs.writeFileSync(f2, c2);

console.log('Fixed imports and SUGGESTED');
