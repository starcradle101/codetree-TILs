const fs = require('fs');
const inputChar = fs.readFileSync(0).toString().trim().split('\n');
const wordsNumber = Number(inputChar[0]);
const words = inputChar.slice(1);
let aCount = 0;
let totalLength = 0;

for (let word of words) {
    totalLength += word.length;
    if (word[0] === 'a') aCount += 1;
}

console.log(totalLength, aCount);