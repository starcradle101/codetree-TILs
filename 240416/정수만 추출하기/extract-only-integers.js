const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let sum = 0; 

for (let el of input) {
    let currentNum = '';
    for (let i = 0; i < el.length; i += 1) {
        if (el[i] != Number(el[i])) break;
        currentNum += el[i];
    }
    sum += Number(currentNum);
}

console.log(sum)
// 숫자가 아닌 문자가 나올 때까지