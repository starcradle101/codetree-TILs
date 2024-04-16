const fs = require('fs');
let string = fs.readFileSync(0).toString().trim();

for (let i = 0; i < string.length; i += 1) {
    string = input.slice(1) + input.slice(0, 1);
    console.log(string);
}