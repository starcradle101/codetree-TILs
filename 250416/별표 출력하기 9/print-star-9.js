const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';
    
    for(let j = 1; j < n - i; j += 1) {
        line += '  ';
    }

    for(let k = 0; k < 2 * i + 1; k += 1) {
        line += '* ';
    }
    
    console.log(line)
}