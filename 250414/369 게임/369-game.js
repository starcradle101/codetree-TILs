const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = '';

for(let i = 1; i <= n; i += 1) {
    const n_str = i.toString();

    if(i !== 1 && (i % 3 === 0 || n_str.includes('3') || n_str.includes('6') || n_str.includes('9'))) {
        answer += '0 ';
    } else {
        answer += i + ' ';
    }
}

console.log(answer);