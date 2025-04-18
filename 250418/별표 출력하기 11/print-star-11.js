const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < 2 * n + 1; i += 1) {
    let line = '';

    if(i % 2 === 1) {
        for(let j = 0; j < 2 * n + 1; j += 1) {
            line += (j % 2 === 0) ? '* ' : '  ';
        }
        console.log(line);
    } else {
        for(let j = 0; j < 2 * n + 1; j += 1) {
            line += '* ';
        }
        console.log(line);
    }
}