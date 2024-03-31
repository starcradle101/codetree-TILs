const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let [a, b] = [Number(input[0]), Number(input[1])];
let result = '';

for (let i = 2; i <= 8; i += 2) {
    for (let j = b; j >= a; j -= 1) {
        result += (`${j} * ${i} = ${j * i} `)
        if (j !== a) result += '/ ';
    }
    result += '\n';
}

console.log(result)
// a이상 b 이하 해당하는 숫자의 구구단
// 2, 4, 6, 8을 곱한 값만 출력
//