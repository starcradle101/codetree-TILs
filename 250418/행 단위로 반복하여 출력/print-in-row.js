const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';
    for(let j = 1; j <= n; j += 1) {
        line += j + '';
    }
    console.log(line)
}
