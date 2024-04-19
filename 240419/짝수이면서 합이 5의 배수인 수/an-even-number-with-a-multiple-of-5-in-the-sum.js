const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function isEven(n) {
    return (n % 2 === 0);
}


function isDividedBy5AndEven(n) {
    let n2 = n.toString().split('').map(Number);
    let sumOfN2Digit = n2[0] + n2[1];
    return (sumOfN2Digit % 5 === 0);
}

console.log(isEven(input) && isDividedBy5AndEven(input) ? 'Yes' : 'No');