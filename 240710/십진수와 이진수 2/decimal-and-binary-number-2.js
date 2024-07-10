const fs = require('fs');
const binaryDigits = fs.readFileSync(0).toString().trim().split('').map(Number);

const getDecimal = (binary) => {
    let decimal = 0;
    for (let i = 0; i < binary.length; i += 1) {
        decimal = decimal * 2 + binary[i];
    }

    return decimal;
}

const get17Binary = (decimal) => {
    let processedDecimal = decimal * 17;
    let binary = [];
    
    while(true) {
        if (processedDecimal < 2) {
            binary.unshift(processedDecimal);
            break;
        }

        binary.unshift(processedDecimal % 2);
        processedDecimal = Math.floor(processedDecimal / 2);
    }

    return binary.join('');
}

const result = get17Binary(getDecimal(binaryDigits));


console.log(result)