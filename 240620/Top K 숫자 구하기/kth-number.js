const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const result = arr.sort((a, b) => a - b);

console.log(result[k - 1]);