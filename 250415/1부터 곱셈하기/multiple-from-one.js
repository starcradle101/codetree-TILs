const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let prod = 1;

for(let i = 1; i <= 10; i += 1) {
    prod *= i;
    if(prod >= n) {
        console.log(i);
        break;
    }
}