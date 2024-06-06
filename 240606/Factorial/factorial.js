const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 0) return 1;

    return n * f(n - 1);
}

console.log(f(input));