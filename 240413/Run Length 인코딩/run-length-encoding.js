const fs = require('fs');
let word = fs.readFileSync(0).toString().trim();
let [char, count] = [word[0],1];
let compressedString = '';

for (let i = 1; i <= word.length; i += 1) {
    if (word[i - 1] !== word[i]) {
        compressedString += char + count;
        [char, count] = [word[i], 1];
    } else {
        count += 1
    }
}

console.log(`${compressedString.length}\n${compressedString}`);