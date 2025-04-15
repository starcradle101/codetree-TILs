const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true) {
    if(input[idx] === 1) {
        console.log('John');
        idx += 1;
    } else if (input[idx] === 2) {
        console.log('Tom');
        idx += 1;
    } else if (input[idx] === 3) {
        console.log('Paul');
        idx += 1;
    } else if (input[idx] === 4) {
        console.log('Sam');
        idx += 1;
    } else {
        console.log('Vacancy');
        break;
    }
}