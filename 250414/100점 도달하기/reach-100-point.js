const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());

let answer = '';

for(let i = score; i <= 100; i += 1) {
    if(i >= 90) {
        answer += 'A ';
    } else if(i >= 80) {
        answer += 'B ';
    } else if(i >= 70) {
        answer += 'C ';
    } else if(i >= 60) {
        answer += 'D ';
    } else {
        answer += 'F ';
    }
}

console.log(answer);