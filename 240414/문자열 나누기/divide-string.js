const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let num = Number(input[0]);
let numbers = input[1].split(' ').join('');
let result = '';

for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
    if (result.length === 5) {
        console.log(result);
        result = '';
    }
}
if (result.length !== 0) {
    console.log(result);
}