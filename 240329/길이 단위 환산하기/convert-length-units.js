const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

const FT = 30.48;

console.log((input * FT).toFixed(1));