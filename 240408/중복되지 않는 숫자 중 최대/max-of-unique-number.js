const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let max = -1;
let duplicateArr = [];

for (let i = 0; i < length; i += 1) {
    if (duplicateArr.includes(arr[i])) {
        continue;
    }

    if (length > 1 && arr[i] === arr[i + 1]) {
        duplicateArr.push(arr[i]);
        continue;
    }

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log((max === arr[0]) ? -1 : max);