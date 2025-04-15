const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for(let i = 0; i < n; i += 1) {
    let line = '';
    for(let j = 0; j < m; j += 1) {
        line += '* ';
    }
    console.log(line);
}