const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str_cnt = 2 * n - 1;
let empty_cnt = 0;

for(let i = 1; i <= 2 * n - 1; i += 1) {
    let line = '';
    for(let j = 0; j < empty_cnt; j += 1) {
        line += '  ';
    }
    for(let k = 0; k < str_cnt; k += 1) {
        line += '* ';
    }

    if(i >= n) {
        str_cnt += 2;
        empty_cnt -= 1;
    } else {
        str_cnt -= 2;
        empty_cnt += 1;
    }

    console.log(line)
}