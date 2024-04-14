const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [string, char] = input;
let cnt = 0;

for (let i = 0; i < string.length - 1; i += 1) {
    if (string.slice(i, i + 2) === char) {
        cnt += 1;
    }
}

console.log(cnt);