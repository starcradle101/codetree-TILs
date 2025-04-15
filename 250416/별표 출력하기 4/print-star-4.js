const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';
let cnt = n;

for(let i = 1; i < n * 2; i += 1) {
    str = '';
    for(let j = 0; j < cnt; j += 1) {
        str += '* ';
    }
    console.log(str);

    if(i < n) {
        cnt -= 1;
    } else {
        cnt += 1;
    }
}