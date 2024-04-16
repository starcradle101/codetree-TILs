const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let result = '';

for (let i = 0; i < input.length; i += 1) {
    if (input[i] <= 'Z' && input[i] >= 'A') {
        result += input[i].toLowerCase();
    } else if ((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 0 && input[i] <= 9) ) {
        result += input[i];
    }
}

console.log(result);

// 알파벳만 대문자로