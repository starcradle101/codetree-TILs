const fs = require('fs');
let digits = fs.readFileSync(0).toString().trim().split(' ');
let result = '';
for (let digit of digits) {
    result += `${String.fromCharCode(digit)} `;
}
console.log(result);