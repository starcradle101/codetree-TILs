const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';

    if(i % 2 === 0) {
        line += '*'
    } else {
        for(let j = 0; j < i + 1; j += 1) {
            line += '* ';
        }
    }

    console.log(line)
}

// 인덱스 짝수는 1, 2, 3...0 < n - 2 까지 1씩 증가
// 인덱스 홀수는 5, 4, 3... n > n-1까지 1씩 감소

// n = 3
// 0 1개
// 1 3개
// 2 2개
// 3 2개
// 4 3개
// 5 1개

// n = 4
// 0 1개
// 1 1개
// 2 1개
// 3 1개
// 4 1개
// 5 1개