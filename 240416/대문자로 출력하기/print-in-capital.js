const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let result = '';

for (let i = 0; i < input.length; i += 1) {
    if (input[i] <= 'Z' && input[i] >= 'A') {
        result += input[i];
    } else if (input[i] >= 'a' && input[i] <= 'z') {
        result += input[i].toUpperCase();
    }
}

console.log(result);

// 알파벳만 대문자로