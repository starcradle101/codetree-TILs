const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let odd_str = n;
let even_str = 1;

for(let i = 0; i < 2 * n; i += 1) {
    let line = '';

    if(i % 2 === 0) {
        for(let j = 0; j < even_str; j += 1) {
            line += '* ';
        }

       even_str += 1;
    } else {
        for(let j = odd_str; j > 0; j -= 1) {
            line += '* ';
        }

        odd_str -= 1;
    }

    console.log(line)
}