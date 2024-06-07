const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return n + f(n - 2);
    }
}

console.log(f(input));