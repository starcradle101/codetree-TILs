const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

const arr = input.slice(1);

for(let num of arr) {
    if(sum % 2 === 1 && sum % 3 === 0) sum += num;
}

console.log(sum);