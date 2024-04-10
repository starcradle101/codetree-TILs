const fs = require('fs');
let input = (fs.readFileSync(0).toString().trim().split(' '));
let [n, m] = input.map(Number);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let cnt = 0;

for (let i = 0; i < m; i += 1) {
    // i가 짝수라면 j를 위에서 아래로
    // i가 홀수라면 j를 아래에서 위로
    if (i % 2 === 0) {
        for (let j = 0; j < n; j += 1) {
            arr2d[j][i] = cnt++;
        }
    } else {
        for (let j = n - 1; j >= 0; j -= 1) {
            arr2d[j][i] = cnt++;
        }
    }
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    result += arr2d[i].join(' ');
    console.log(result);
}

// 똑같이 ji로 가되, 열이 짝수일 경우 ++로, 홀수일 경우 --로 채우도록 하자