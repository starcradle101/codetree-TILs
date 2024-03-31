const fs = require('fs');
let n = Number((fs.readFileSync(0).toString()));
let j = 0;
let k = 1;
let line = '';

for (let i = 0; i < n; i += 1) {
    
    if (i % 2 === 0) {
        line += '* '.repeat(n - j) + '\n';
        j += 1;
    } else {
        line += '* '.repeat(k) + '\n';
        k += 1;
    }
}

for (let i = n; i >= 1; i -= 1) {
    if (i % 2 === 0) {
        line += '* '.repeat(k - 1) + '\n';
        k -= 1;
    } else {
        line += '* '.repeat(n - j + 1) + '\n';
        j -= 1;
    }
}

console.log(line)

// // n = 5
// // 5 1 4 2 3
// i = 0 // n 
// i = 1// 1
// i = 2 // n - 1
// i = 3 // 2
// i = 4 // n - 2