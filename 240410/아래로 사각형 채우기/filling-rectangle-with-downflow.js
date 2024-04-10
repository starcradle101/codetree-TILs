const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));
let cnt = 1;

for (let i = 0; i < n; i += 1) {
    for(let j = 0; j < n; j += 1) {
        arr2d[j][i] = cnt++;
    }
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    result += arr2d[i].join(' ');
    console.log(result);
}