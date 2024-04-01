const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());
let result = '';

for (let i = 0; i < n; i += 1) {
   for (let j = n - i; j <= n; j += 1) {
    result += j + ' '
   }
   result += '\n';
}

console.log(result)