const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function getSumDividedBy10(range) {
    let sum = 0;
    for (let i = 1; i <= range; i += 1) {
        sum += i;
    }
    return parseInt(sum / 10);
}

let result = getSumDividedBy10(input);

console.log(result)