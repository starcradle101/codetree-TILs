const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = 0;

for(let num of input) {
    if(num % 3 === 0 || num % 5 === 0) cnt += 1;
}

console.log(cnt)