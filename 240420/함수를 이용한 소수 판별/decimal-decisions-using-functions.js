// 함수를 이용한 소수 판별
// a 이상 b 이하 소수들의 합

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, b] = input;

// 소수의 합 구하는 함수
function getPrimeSum(a, b) {
    if (a === 1 && b === 1) return 0;
    let primeSum = 0;
 for (let i = a; i <= b; i += 1) {
    if (findPrime(i)) primeSum += i;
 }
 return primeSum;
}

// 소수를 판별하는 함수
function findPrime(n) {
    for (let i = 2; i < n; i +=1 ) {
        if (n % i === 0) return false;
    }
    return true;
}

let result = getPrimeSum(a, b);
console.log(result)

// 1부터 확인하도록 수정하자.