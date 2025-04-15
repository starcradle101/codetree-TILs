const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';
    for(let j = n; j > 0; j -= 1) {
        line += '* ';
    }
    console.log(line);
}