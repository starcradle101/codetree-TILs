const fs = require('fs');
let input = (fs.readFileSync(0).toString().trim().split(' ').map(Number));
let [a, b, c] = input;

function getMinValue(a, b, c) {
    let minValue = Math.min(a, b, c);
    return minValue;
}

let result = getMinValue(a, b, c);

console.log(result)