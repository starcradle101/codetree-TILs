const fs = require('fs');
let n = Number((fs.readFileSync(0).toString()));

// 첫 번째 줄 출력
console.log('* '.repeat(n).trim());

// 중간 줄 출력
for (let i = 1; i < n - 1; i++) {
    let line = '*';
    for (let j = 1; j < n - 1; j++) {
        if (i === j) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    line += ' *';
    console.log(line);
}

// 마지막 줄 출력
if (n > 1) {
    console.log('* '.repeat(n).trim());
}