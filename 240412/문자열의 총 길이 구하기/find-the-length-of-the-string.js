const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let totalLength = 0;


for (let word of input) {
    totalLength += word.length;
}

console.log(totalLength)