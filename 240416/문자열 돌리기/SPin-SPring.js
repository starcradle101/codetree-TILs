const fs = require('fs');
let string = fs.readFileSync(0).toString().trim();
console.log(string);

for (let i = 0; i < string.length; i += 1) {
    string = string.slice(-1) + string.slice(0, -1);
    console.log(string);
}