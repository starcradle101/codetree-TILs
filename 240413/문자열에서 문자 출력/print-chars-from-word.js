const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

for (let char of input) {
    console.log(char)
}