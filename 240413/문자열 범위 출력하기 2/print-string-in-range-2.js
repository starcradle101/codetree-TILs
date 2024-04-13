const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let word = input[0];
let sliceIndex = Number(input[1]);
let result = '';

if (sliceIndex > word.length) {
    for (let i = 0; i < word.length; i += 1) {
        result += word[i];
    }
} else {
    for (let i = word.length - 1; i>= word.length - sliceIndex; i-=1) {
        result += (word[i]);
    }
    
}

console.log(result);
// 맨 뒤에서부터 (word.length)
// 주어진 정수의 개수만큼 (word.length - sliceIndex) 문자 출력