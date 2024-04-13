const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let word = input[0];
let sliceIndex = Number(input[1]);
let result = '';

for (let i = sliceIndex - 1; i>= sliceIndex - word.length; i-=1) {
    result += (word[sliceIndex[i]]);
}

console.log(result);