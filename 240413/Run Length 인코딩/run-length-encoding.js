const fs = require('fs');
let word = fs.readFileSync(0).toString().trim();
let [char, count] = [word[0],0];
let compressedString = '';

for (let i = 0; i < word.lenth; i += 1) {
    if (word[i] !== word[i - 1]) {
        compressedString += char + count;
        [char, count] = [word[i], 0];
    } else {
        count += 1
    }
}

console.log(compressedString);