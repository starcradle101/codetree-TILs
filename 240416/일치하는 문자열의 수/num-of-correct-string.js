const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let count = 0;
let [stringNum, string] = input[0];
let stringArr = input.slice(1);

for (let str of stringArr) {
    if (str === string) {
        count += 1
    }
}

console.log(count)