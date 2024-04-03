const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let index = 0;

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 250) {
        index = i;
        break;
    } else {
        sum += arr[i];
    }
}

let avg = (sum / (index)).toFixed(1);

console.log(sum, avg)