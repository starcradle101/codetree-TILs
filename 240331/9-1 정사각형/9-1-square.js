const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let result = '';

let cnt = 9;

for (let i = 0; i < n; i += 1) {
    
    for (let j = 0; j < n; j += 1 ) {
        if (cnt === 0) {
        cnt += 9;
        }
        result += '' + cnt; 
        cnt -= 1;
    }
    result += '\n';
}

console.log(result)