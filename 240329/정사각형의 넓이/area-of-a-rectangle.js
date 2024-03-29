const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let area = input ** 2;
console.log(area);
if (input < 5) console.log('tiny');