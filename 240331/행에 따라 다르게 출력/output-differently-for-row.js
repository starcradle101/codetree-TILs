const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let cnt = 1;
let result = '';

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        if (i % 2 === 0) {
            result += cnt + ' ';
            cnt += 1;
        } else {
            result += cnt + ' ';
            cnt += 2;
        }
    }
    if (i % 2 === 0 && i !== 0) cnt += 1;
    result += '\n';
}

console.log(result)