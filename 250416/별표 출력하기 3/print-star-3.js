const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i += 1) {
    let line = '';
    
    for(let k = 0; k < i; k += 1) {
        line += '  ';
    }

    for(let j = 2 * n - 1; j > 2 * i ; j -= 1) {
        line += '* ';
    }
    
    console.log(line)
}

// 이거 홀수네
// 그럼 찍혀야 하는 별의 개수는  2 * n - 1 부터 시작해서
// 그 다음에는 2 * n -1 -2 ... 2씩 줄어든다
// 공백은 0개부터 시작해서 줄마다 하나씩 늘어가면 된다.