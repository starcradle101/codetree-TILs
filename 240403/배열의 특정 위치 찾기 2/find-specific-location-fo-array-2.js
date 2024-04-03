const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
let length = input.length;

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <length; i += 1) {
    (i % 2 === 0) ? oddSum += input[i] : evenSum += input[i];
}

let result = (oddSum > evenSum) ? oddSum - evenSum : evenSum - oddSum;

console.log(result)