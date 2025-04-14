const fs = require("fs");
const year = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 1; i <= year; i += 1) {
    if((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        cnt += 1;
    }
}

console.log(cnt)