const fs = require('fs');
let input = (fs.readFileSync(0).toString().trim().split(' ').map(Number));
let [a, b] = input;
let cnt = 0;

// a 이상 b 이하 수들 중 3 ,6, 9 하나가 들어있거나
// 그 숫자 자체가 3의 배수인 숫자

function find369(n) {
    const nDigits = n.toString().split('');
    for (let digit of nDigits) {
        if (digit === '3' || digit === '6' || digit === '9') return true;
    }
}

function isDividedBy3(n) {
    return n % 3 === 0;
}

for (let i = a; i <= b; i += 1) {
    if (find369(i) || isDividedBy3(i)) cnt += 1;
}

console.log(cnt)