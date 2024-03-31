const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let num = 1;
let line = '';

for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < n; j++) {
        line += num + ' ';
        if (i % 2 === 0) {
            (j === n - 1) ? num += 2 : num += 1;
        } else {
            (j === n - 1) ? num += 1 : num += 2;
        }
    }
    line += '\n';
}

console.log(line)