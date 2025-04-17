const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';

    if(i % 2 === 0) {
        line += '*'
    } else {
        for(let j = 0; j < i + 1; j += 1) {
            line += '* ';
        }
    }

    console.log(line)
}