const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));
let i = 0;
let sum = 0;

while(true) {
    if (input[i] >= 30 || input[i] < 20) {
        break;
    }
    sum += +input[i];
    i += 1;
}

let avg = (sum / i).toFixed(2);

console.log(avg)