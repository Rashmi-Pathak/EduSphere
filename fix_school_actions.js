const fs = require('fs');

// Fix SchoolStatusActions.tsx
let f = 'src/components/SchoolStatusActions.tsx';
let c = fs.readFileSync(f, 'utf8');
c = c.replace(/import { SchoolStatus } from "@prisma\/client";/g, '');
c = c.replace(/schoolStatus: SchoolStatus;/g, 'schoolStatus: string;');
fs.writeFileSync(f, c);

console.log('Fixed SchoolStatusActions.tsx');
