const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let result1 = 0;
let result2 = 0;

if (a < b) {
    result1 = 1
} else {
    result1 = 0
}

if (a === b) {
    result2 = 1
} else {
    result2 = 0
}

console.log(result1, result2)