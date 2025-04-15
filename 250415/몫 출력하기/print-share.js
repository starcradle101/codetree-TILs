const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = 1;

for(let num of arr) {
    if(cnt > 3) break;

    if(num % 2 === 0) {
        console.log(parseInt(num / 2));
        cnt += 1;
    }
}