const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let height = input[0];
let weight = input[1];

let bmi = (10000 * weight) / height ** 2;
console.log(parseInt(bmi));
if (bmi >= 25) {
  console.log('Obesity');
}