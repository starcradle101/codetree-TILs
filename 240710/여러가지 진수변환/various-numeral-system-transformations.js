const fs = require('fs');
let [num, parseNum] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let parsedDigits = [];

while(true) {
    if (num < parseNum) {
        parsedDigits.unshift(num);
        break;
    }

    parsedDigits.unshift(num % parseNum);
    num = Math.floor(num / parseNum);
}

console.log(parsedDigits.join(''))