const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let cnt = 0;
let arr = [];
let startingValue = n;

while (cnt < 3) {
    if (startingValue % 5 === 0) cnt += 1;
    arr.push(startingValue);
    startingValue += n;
}

let answer = arr.join(' ');
console.log(answer)