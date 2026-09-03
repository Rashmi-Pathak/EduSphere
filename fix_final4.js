const fs = require('fs');

let f2 = 'src/lib/actions/aiEvaluation.actions.ts';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/status:\s*\.([A-Z_]+)/g, 'status: ""');
fs.writeFileSync(f2, c2);

console.log('Fixed syntax errors');
