const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function f(n) {

    if (n <= 2) {
        return 1;
    }

    return f(n - 1) + f(n - 2)
}

console.log(f(input));

// 피보나치 수열 -> 이전 두 항의 합이 그 다음 항이 되는 수열