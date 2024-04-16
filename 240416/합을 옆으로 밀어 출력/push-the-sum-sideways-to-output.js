const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0;
for (let el of input) {
    sum += el;
}

let sumString = sum.toString();

sumString = sumString.slice(1) + sumString.slice(0, 1);

console.log(sumString)
//  두 수의 합에서 숫자 1이 몇 번 나오는지 출력하는 프로그램