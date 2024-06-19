const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

const f = (n) => {
    if(n === 1) return 1;
    if (n === 2) return 2;

    return f(parseInt(n/3)) + f(n - 1);
}

console.log(f(input));

// f(1) = 1;
// f(2) = 2;

// f(n) = f(parseInt(n/3)) + f(n - 1);