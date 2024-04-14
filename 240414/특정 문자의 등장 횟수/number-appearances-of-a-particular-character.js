const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let [eeCount, ebCount] = [0, 0];

for (let i = 0; i < input.length - 1; i += 1) {
    if (input.slice(i, i + 2) === 'ee') eeCount += 1;
    if (input.slice(i, i + 2) === 'eb') ebCount += 1;
}

console.log(eeCount, ebCount);