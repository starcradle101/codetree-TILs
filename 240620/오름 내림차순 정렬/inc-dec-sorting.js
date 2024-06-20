const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

const ascend = arr.sort((a,b) => a - b).join(' ');
const descend = arr.sort((a,b) => b - a).join(' ');

console.log(`${ascend}\n${descend}`);