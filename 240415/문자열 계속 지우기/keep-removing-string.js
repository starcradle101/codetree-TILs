const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [string, subString] = input;
subStringLength = subString.length;

while (true) {
    if (!string.includes(subString)) break;
    let subStringIndex = string.indexOf(subString);
    string = string.slice(0, subStringIndex) + string.slice(subStringIndex + subStringLength);
}

console.log(string);

// 부분문자열 중 가장 앞에 있는 문자열 삭제
// 이어붙인 후 다시 문자열에서 부분문자열 삭제
// 이 과정을 없을때까지 반복
// while 써보자