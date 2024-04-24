const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [a, b, sign] = [Number(input[0]), Number(input[2]), input[1]];

const doFourBasicOperations = (input) => {
    const operatorSign = input[1];
    if (operatorSign !== '+' && operatorSign !== '-' && operatorSign !== '/' && operatorSign !== '*') {
        return 'False';
    } else {
        const [a, b] = [Number(input[0]), Number(input[2])];
        let result = 0;
        switch(operatorSign) {
            case '+':
                result = add(a, b);
                break;
            case '-':
                result = subtract(a, b);
                break;
            case '*':
                result = multiply(a, b);
                break;
            case '/':
               result =  divide(a, b);
        }

        return (`${a} ${operatorSign} ${b} = ${result}`)
    }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => parseInt(a / b);
const multiply = (a, b) => a * b;

const result = doFourBasicOperations(input);
console.log(result);