const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [parseNum1, parseNum2] = input[0].split(' ').map(Number);
const parsed = input[1].split('').map(Number);

const getDecimalFrom = (parsed, parseNum) => {
    let decimal = 0;
    for (let i = 0; i < parsed.length; i += 1 ) {
        decimal = decimal * parseNum + parsed[i];
    }
    return decimal;
}

const getParsedBy = (decimal, parseNum) => {
    let num = decimal;
    let parsed = [];
    
    while(true) {
        if (num < parseNum) {
            parsed.unshift(num);
            break;
        }
        
        parsed.unshift(num % parseNum);
        num = Math.floor(num / parseNum);
    }
    return parsed.join('');
}

const decimal = getDecimalFrom(parsed, parseNum1);
const result = getParsedBy(decimal, parseNum2);


console.log(result)