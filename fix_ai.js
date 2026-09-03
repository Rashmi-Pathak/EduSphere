const fs = require('fs');

let f = 'src/lib/actions/aiEvaluation.actions.ts';
let c = fs.readFileSync(f, 'utf8');

c = c.replace(/strengths: \[\]/g, 'strengths: JSON.stringify([])');
c = c.replace(/weaknesses: \[\]/g, 'weaknesses: JSON.stringify([])');
c = c.replace(/strengths: suggestion\.strengths/g, 'strengths: JSON.stringify(suggestion.strengths)');
c = c.replace(/weaknesses: suggestion\.weaknesses/g, 'weaknesses: JSON.stringify(suggestion.weaknesses)');

fs.writeFileSync(f, c);
console.log('Fixed aiEvaluation.actions.ts');
