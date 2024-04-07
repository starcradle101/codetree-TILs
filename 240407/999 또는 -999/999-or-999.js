const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
let arr = [];

for(let i = 0; i < input.length; i += 1) {
    if (input[i] === 999 || input[i] === -999) {
        break;
    }
    arr.push(input[i]);
}

let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
        max = arr[i];
    }
}

console.log(max, min);