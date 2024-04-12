const fs = require('fs');
const inputChar = fs.readFileSync(0).toString().trim();
const words = ['apple', 'banana', 'grape', 'blueberry', 'orange'];
let count = 0;

for (let word of words) {
    if(word[2] === inputChar || word[3] === inputChar) {
        console.log(word);
        count += 1;
    }
}
console.log(count);

// 문자열 배열이 주어졌을 때 5개의 문자열들 중 세 번째나 네 번째 문자와 일치하는 문자열들을 모두 찾아내고
// 이러한 문자열의 개수를 출력해야함