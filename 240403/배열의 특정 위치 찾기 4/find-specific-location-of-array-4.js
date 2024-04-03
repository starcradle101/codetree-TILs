const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0, cnt = 0;

for (let el of input) {
    if (el === 0) {
        break;
    } else if (el % 2=== 0) {
        sum += el;
        cnt += 1;
    }
}

console.log(cnt, sum);

// 여기서 2의 배수의 개수와 합계