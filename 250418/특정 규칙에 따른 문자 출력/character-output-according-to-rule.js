const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let char_cnt = 1;
let empty_cnt = n - 1;

for(let i = 1; i <= 2 * n - 1; i += 1) {
    let line = '';

    if(i >= n) {
        for(let j = 0; j < char_cnt; j += 1) {
            line += '@ ';
        }
        char_cnt -= 1;
        empty_cnt += 1;

    } else {
        for(let k = 0; k < empty_cnt; k += 1) {
            line += '  ';
        }
        for(let j = 0; j < char_cnt; j += 1) {
            line += '@ ';
        }
        char_cnt += 1;
        empty_cnt -= 1;
    }
    
    console.log(line)
}