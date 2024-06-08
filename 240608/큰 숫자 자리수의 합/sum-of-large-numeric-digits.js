const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const product = input.reduce((acc, curr) => acc * curr, 1).toString();

const f = (input) => {
    if (input.length === 1) return Number(input);

    return Number(input[0]) + f(input.slice(1));
}

console.log(f(product));