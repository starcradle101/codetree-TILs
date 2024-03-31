const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];
let isCoDivider = false;

for (let i = a; i <= b; i += 1) {
    if (1920 % i === 0 && 2880 % i === 0) {
        console.log(1);
        isCoDivider = true;
        break;
    }
}

if (!isCoDivider)  {
    console.log(0)
}