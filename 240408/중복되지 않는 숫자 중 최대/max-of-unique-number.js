const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a,b)=> a - b);
let max = arr[0];
let duplicateArr = [];

for (let i = 0; i < length; i += 1) {

    if (duplicateArr.includes(arr[i])) {
        continue;
    }

    if (arr[i] === arr[i + 1]) {
        duplicateArr.push(arr[i]);
        continue;
    }

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log((max === 0) ? -1 : max);

// 정렬됏다면
// 인접한 숫자를 비교해서 중복된다면 건너뛰고
// 그렇지 않다면 중복되지 않는 숫자이다.