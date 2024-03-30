const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let i = 1;

while (i <= input) {
    console.log('*')
    i += 1;
}