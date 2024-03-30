const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let string = 'LeebrosCode';

for (let i = 0; i < input; i += 1) {
    console.log(string)
}