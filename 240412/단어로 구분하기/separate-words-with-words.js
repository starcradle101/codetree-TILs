const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
for (let el of input) {
    console.log(el)
}