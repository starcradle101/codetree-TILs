// 소수인지 판별
// 자릿수의 합이 짝수인지 판별

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

const isPrimeNumber = (n) => {
    for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}

const isSumEven = (n) => {
    const nDigitsSum = n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);
    return nDigitsSum % 2 === 0;
}

for (let i = a; i <= b; i += 1) {
    if (isPrimeNumber(i) && isSumEven(i)) count += 1;
}

console.log(count)