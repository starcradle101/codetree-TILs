const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

console.log((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0);