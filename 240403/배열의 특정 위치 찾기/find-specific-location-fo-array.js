const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
let length = input.length;

let evenSum = 0;
for (let i = 1; i < length; i += 2) {
    evenSum += input[i];
}

let thirdSum = 0;
let cnt = 0;
for(let i = 2; i < length; i += 3) {
    thirdSum += input[i];
    cnt += 1;
}
let avg = (thirdSum / cnt).toFixed(1);

console.log(evenSum, avg)

// 짝수 번째로 입력된 값의 합
// 3의 배수 번째로 입력된 값의 평균