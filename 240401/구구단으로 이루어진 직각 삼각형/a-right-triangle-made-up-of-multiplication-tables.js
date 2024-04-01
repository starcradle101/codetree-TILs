const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());
let result = '';

for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n - i + 1; j += 1) {
        result += `${i} * ${j} = ${i * j}`;
        if (j !== n - i + 1) result += ' / ';
    }
    result += '\n';
}

console.log(result)

// 구구단을 직각삼각형으로...?
// i ... n 까지의 단을 줄마다 점점 줄여가며 출력하기
//