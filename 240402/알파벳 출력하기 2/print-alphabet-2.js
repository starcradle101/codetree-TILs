const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = '';
let index = 'A'.charCodeAt();


for (let i = 0; i < n; i += 1) {
        result += '  '.repeat(i);
    for (let j = i; j < n; j += 1) {
        if (index > 90) {
            index = 'A'.charCodeAt();
        }
        result += String.fromCharCode(index) + ' ';
        index += 1;
    }
    result += '\n';
}

console.log(result)

// n -> n 번 만큼 반복
// 한 줄에 출력되는 알파벳 수 : n + 1 개 ... 1개까지 반복
// 공백 : 0개 ... n - 1개