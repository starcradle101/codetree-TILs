const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const getSum = (n) => {
    if (n === 1) {
        return 1;
    }
    
    return n + getSum(n - 1);
}

console.log(getSum(input));