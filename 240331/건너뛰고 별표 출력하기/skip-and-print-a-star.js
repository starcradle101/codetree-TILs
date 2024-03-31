const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());
let stars = '';

    for (let i = 1; i <=n; i += 1) {
        stars += '*'.repeat(i) + '\n\n';
    }
    for (let i = n - 1; i >= 1; i -= 1) {
        stars += '*'.repeat(i) + '\n\n';
    }

    console.log(stars)

// n개를 입력받으면
// 출력하는 별표의 줄 수는 2n - 1 개
// 가장 큰 별표의 줄 수는 n 개