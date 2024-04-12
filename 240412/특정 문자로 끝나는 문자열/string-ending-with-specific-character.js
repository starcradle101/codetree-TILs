const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const words = input.slice(0, 11);
const queryChar = input[11];

for (let i = 0; i < words.length; i += 1) {
    let endOfWord = words[i][words[i].length - 1];
    if (endOfWord === queryChar) {
        console.log(words[i]);
    }
}