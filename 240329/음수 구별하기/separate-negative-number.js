const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

console.log(input);
if (input < 0) {
    console.log('minus');
}