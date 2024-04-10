const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [n, m] = [input[0], input[1]];
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let cnt = 1;

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
        arr2d[i][j] = cnt;
        cnt += 1;
    }
}

let result = '';

for (let i = 0; i < n; i += 1) {
    let resultRow = arr2d[i].join(' ');
    result += resultRow + '\n';
}

console.log(result)