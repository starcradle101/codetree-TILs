const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = '';
let num = a;

while(true) {
    if(num > b) break;
    
    answer += num + ' ';
    
    if(num % 2 === 1) {
        num *= 2;
    } else {
        num += 3;
    }
}

console.log(answer);