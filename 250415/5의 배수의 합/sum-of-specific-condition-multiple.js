const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

if(a > b) {
    for(let i = b; i <= a; i += 1) {
        if(i % 5 === 0) sum += i;
    }
} else if(a < b) {
    for(let i = a; i <= b; i += 1) {
        if(i % 5 === 0) sum += i;
    }
} else {
    if(a % 5 === 0) sum += a;
}

console.log(sum);