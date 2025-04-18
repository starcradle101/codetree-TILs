const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let line = '';
for(let j = n; j > 0; j -= 1) {
        line += '* ';
}
console.log(line);

for(let i = 0; i < n - 1; i += 1) {
    line = '';
    for(let k = 0; k < n; k += 1) {
        if(k % 2 === 0) {
            line += '  ';
        } else {
            line += (k > i) ? '* ' : '  ';
        }
    }
    console.log(line);
}