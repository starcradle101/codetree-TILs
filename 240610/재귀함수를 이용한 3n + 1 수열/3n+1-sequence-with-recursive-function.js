const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

const f = (n) => {
    if (n === 1) {
        return 0;
    }
    if (n % 2 === 0) {
        return f(parseInt(n / 2)) + 1;
    }
    if (n % 2 === 1) {
        return f(n * 3 + 1) + 1;
    }
}

console.log(f(input))

// n이 짝수 -> 2로 나눔
// n이 홀수 -> 3을 곱하고 1을 더함
// 이 반복 횟수를 세는 것