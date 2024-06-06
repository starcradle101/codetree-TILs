const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 1) {
        return 0;
    }

    if (n % 2 === 0) {
        return f(parseInt(n / 2)) + 1;
    } else {
        return f(parseInt(n / 3)) + 1;
    }
}

console.log(f(input));