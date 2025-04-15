const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let cnt = 0;

for(let i = a; i <= b; i += 1) {
    if(i % 5 === 0 || i % 7 === 0) {
        sum += i;
        cnt += 1;
    }
}

const avg = (sum / cnt).toFixed(1);

console.log(sum, avg);