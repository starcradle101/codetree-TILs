const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());

let answer = '';

for(let i = score; i <= 100; i += 1) {
    if(score >= 90) {
        answer += 'A ';
    } else if(score >= 80) {
        answer += 'B ';
    } else if(score >= 70) {
        answer += 'C ';
    } else if(score >= 60) {
        answer += 'D ';
    } else {
        answer += 'F ';
    }
}

console.log(answer);