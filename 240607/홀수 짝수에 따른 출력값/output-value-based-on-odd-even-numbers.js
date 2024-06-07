const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n % 2 === 0) {
        return getEvenSum(n);
    } else {
        return getOddSum(n);
    }
}

function getOddSum(n) {
    if (n === 1) return 1;

    return n + getOddSum(n - 2);
}

function getEvenSum(n) {
    if (n === 2) return 2;

    return n + getEvenSum(n - 2);
}

console.log(f(input));