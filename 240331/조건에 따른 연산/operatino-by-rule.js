const fs = require('fs');
let input = Number((fs.readFileSync(0).toString()));
let cnt = 0;

// cnt번의 연산을 했을 때 1000 이상이 된다

// 짝수면 n * 3 + 1
// 홀수면 n * 2 + 2

while(input <= 1000) {
    if (input % 2 === 0) {
        input = input * 3 + 1;
    } else {
        input = input * 2 + 2;
    }
    cnt += 1;
}

console.log(cnt);