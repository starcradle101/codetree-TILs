const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split('\n');
let n = 0;
let isPossible = true;

for (let i = 1; i <= a.length; i += 1) {
    if (a === b) {
        isPossible = true;
        break;
    }
    a = a.slice(-1) + a.slice(0, -1);
    n += 1;
    isPossible = false;
}

console.log(isPossible ? n : -1);