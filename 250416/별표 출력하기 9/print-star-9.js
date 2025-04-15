const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';
    
    for(let j = 1; j < n - i; j += 1) {
        line += '  ';
    }

    for(let k = 1; k < 2 * i + 1; k += 1) {
        line += '* ';
    }
    
    console.log(line)
}

// 공백은 언제나 항상 n - 1개였음

// n = 5 4개
// 별은 2n + 1개 

// 1부터 2i + 1 => 2i개