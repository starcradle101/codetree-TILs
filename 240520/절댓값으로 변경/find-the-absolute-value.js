const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

function makeAbs(arr) {
    let result = arr.map(el => Math.abs(el));

    return result;
}

let result = makeAbs(arr).join(' ');

console.log(result)