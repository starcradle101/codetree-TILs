const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

console.log(factorial(input));