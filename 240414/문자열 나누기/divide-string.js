const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let num = Number(input[0]);
let numbers = input[1].split(' ').join('');
let result = '';

for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
    if (result.length === 5) {
        console.log(result);
        result = '';
    }
}

// 5개씩 끊어서 출력하기
// 순회를 어떻게...?