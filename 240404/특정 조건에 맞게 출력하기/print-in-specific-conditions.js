const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let arr = [];

for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 0) break;
    arr.push(input[i]);
}

for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] % 2 === 1) {
        arr[j] = arr[j] + 3;
    } else {
        arr[j] = parseInt(arr[j] / 2);
    }
}

let str = arr.join(' ');

console.log(str)