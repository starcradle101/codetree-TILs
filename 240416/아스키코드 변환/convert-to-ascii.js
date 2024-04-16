const fs = require('fs');
let string = fs.readFileSync(0).toString().trim().split(' ');
console.log(string[0].charCodeAt(), String.fromCharCode(string[1]));