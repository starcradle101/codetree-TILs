const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt_3 = 0;
let cnt_5 = 0;

for(let num of input) {
    if(num % 3 === 0) cnt_3 += 1;
    if(num % 5 === 0) cnt_5 += 1;
}

console.log(cnt_3, cnt_5)