const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let sum = 0;

for(let i = 1; i < input; i += 1) {
    if(input % i === 0) sum += i;
}

const result = sum === input ? 'P' : 'N';
console.log(result);