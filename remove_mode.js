const fs = require('fs');
const path = require('path');

function removeModeInsensitive(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        removeModeInsensitive(fullPath);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /,\s*mode\s*:\s*["']insensitive["']/g;
      const regex2 = /mode\s*:\s*["']insensitive["']\s*,?/g;
      
      let newContent = content.replace(regex, '');
      newContent = newContent.replace(regex2, '');
      
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Removed mode: insensitive in ' + fullPath);
      }
    }
  }
}

removeModeInsensitive('src');
