const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const words = input.slice(0, 10);
const queryChar = input[10];
let result = '';

for (let i = 0; i < words.length; i += 1) {
    let endOfWord = words[i][words[i].length - 1];

    if (endOfWord === queryChar) {
        result += words[i] + '\n';
    }
}


(result.length === 0) ? console.log('None') : console.log(result);