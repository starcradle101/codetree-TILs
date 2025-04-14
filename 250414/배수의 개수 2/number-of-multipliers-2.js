const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = 0;

for (let el of input) {
    if(el % 2 === 1) answer += 1;
}

console.log(cnt)