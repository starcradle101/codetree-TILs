const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(' ').map(Number);

let arr = [];

for (let el of numbers) {
    if (el % 2 === 0) {
        arr.unshift(el);
    }
}

console.log(arr);


// 짝수만 출력하기