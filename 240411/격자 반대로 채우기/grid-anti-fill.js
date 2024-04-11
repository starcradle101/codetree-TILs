const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1;
let arr2d = Array(n)
	.fill(0)
	.map(() => Array(n).fill(0));

for (let i = n - 1; i >= 0; i -= 1) {
    if (i % 2 === 1) {
        for (let j = n - 1; j >= 0; j -= 1) {
            arr2d[j][i] = cnt++;
        }
    } else {
        for(let j = 0; j < n; j += 1) {
            arr2d[j][i] = cnt++;
        }
    }
    
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    for (let j = 0; j < n; j += 1) {
        result += arr2d[i][j] + ' ';
    }
    console.log(result);
}