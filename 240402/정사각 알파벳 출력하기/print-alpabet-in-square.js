const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
let result = '';
let index = 'A'.charCodeAt();


for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        result += String.fromCharCode(index);
        index += 1;
    }
    result += '\n';
}

console.log(result)