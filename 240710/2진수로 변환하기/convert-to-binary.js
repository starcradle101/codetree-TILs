// 2진수 만드는 법 -> 몫이 1이 될 때까지 나눈다

const fs = require('fs');
let n = parseInt(fs.readFileSync(0).toString().trim());

let binaryDigits = [];

while(true) {
    if (n < 2) {
        binaryDigits.unshift(n);
        break;
    }

    binaryDigits.unshift(n % 2);
    n = Math.floor(n / 2);
}

console.log(binaryDigits.join(''))