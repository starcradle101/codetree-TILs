const fs = require('fs');
const binary = fs.readFileSync(0).toString().trim().split('').map(Number);
let num = 0;

for (let i = 0; i < binary.length; i += 1) {
    num = num * 2 + binary[i];
}

console.log(num)