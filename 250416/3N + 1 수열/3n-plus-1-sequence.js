const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

while(n !== 1) {
    if(n % 2 === 0) {
        n = parseInt(n / 2);
        cnt += 1;
    } else {
        n = n * 3 + 1;
        cnt += 1;
    }
}

console.log(cnt);