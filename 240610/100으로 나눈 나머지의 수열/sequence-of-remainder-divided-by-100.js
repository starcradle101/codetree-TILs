const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

const f = (n) => {
    if (n === 1) {
        return 2;
    } else if (n === 2) {
        return 4;
    } else {
        return (f(n - 1) * f(n - 2)) % 100;
    }
}

console.log(f(input))

// 첫 번째는 2
// 두 번째는 4
// 그 다음부터는 앞의 두 수의 곱을 100으로 나눈 나머지로 된 수열 (변형 피보나치)