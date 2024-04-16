const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sumString = (input[0] + input[1]).toString();
let count = 0;
for (let el of sumString) {
    if (el === '1') {
        count += 1;
    }
}

console.log(count)
//  두 수의 합에서 숫자 1이 몇 번 나오는지 출력하는 프로그램