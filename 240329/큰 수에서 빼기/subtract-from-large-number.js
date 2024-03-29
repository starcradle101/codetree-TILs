const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = input[0];
let b = input[1];

if (a < b) {
  console.log(b - a);
} else {
  console.log(a - b);
}