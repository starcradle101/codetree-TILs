// a 이상 b 이하 온전수의 개수
// 세 조건 중 하나라도 만족한다면 -> 온전수가 아니다!

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let count = 0;

const isPerfectNumber = (n) => {
    if (n % 2 === 0) return false;

    if (n % 10 === 5) return false;

    if (n % 3 === 0 && n % 9 !== 0) return false;

    return true;
}

for (let i = a; i <= b; i += 1) {
    if (isPerfectNumber(i)) count += 1;
}



console.log(count)