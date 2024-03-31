const fs = require('fs');
let input = Number((fs.readFileSync(0).toString()));

let divider = 1;
let quotient = parseInt(input / divider);
let num = 1;

while (true) {
    quotient = parseInt(quotient / divider)
    num += 1;
    divider += 1;
    if (quotient <= 1) {
        break;
    }
}

console.log(num)

// n을 계속해서 1, 2, 3...으로 나누었을 때
// 1 이하가 되는 그 순간까지 총 진행한 횟수
//