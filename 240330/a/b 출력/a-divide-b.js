const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];

let result = '';
let quotient = parseInt(a / b);
result += quotient + '.';
let remainder = a % b;

for (let i = 0; i < 20; i++) {
    remainder *= 10;
    result += Math.floor(remainder / b);
    remainder %= b;
  }

  console.log(result);