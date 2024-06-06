const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const getSquareSum = (n) => {
    if (n < 10) {
        return n ** 2;
    }
    
    return getSquareSum(parseInt(n/10)) + (n % 10) ** 2;
}

console.log(getSquareSum(input));