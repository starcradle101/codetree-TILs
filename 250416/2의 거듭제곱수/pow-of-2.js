const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let answer = 0;

while(n !== 1) {
    n /= 2;
    answer += 1;
}

console.log(answer)