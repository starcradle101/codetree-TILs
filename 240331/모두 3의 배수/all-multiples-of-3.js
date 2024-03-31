const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));
let flag = false;

for (let i = 0; i < 5; i += 1) {
    if (Number(input[i]) % 3 !== 0) {
        flag = true;
        break;
    }
}

console.log(flag ? 1 : 0);