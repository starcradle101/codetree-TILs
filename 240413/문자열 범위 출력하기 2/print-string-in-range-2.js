const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let word = input[0];
let sliceIndex = Number(input[1]);
let result = '';

if (sliceIndex > word.length) {
    console.log(word);
} else {
for (let i = word.length - 1; i>= word.length - sliceIndex; i-=1) {
    result += (word[i]);
}
console.log(result);
}