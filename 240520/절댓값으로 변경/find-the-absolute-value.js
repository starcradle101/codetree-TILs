const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

const makeAbs = (arr) => arr.map(el => Math.abs(el));

let result = makeAbs(arr).join(' ');

console.log(result)