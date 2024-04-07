const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let arr = input[1].trim().split(' ').map(Number);

// 가장 큰 수와 두 번째로 큰 수

// 큰 수 = max로 찾으면 됨
// 두 번째로 큰 수? = 흐음...

// 배열에서 하나씩 내보내자

arr.sort((a, b) => b - a);
console.log(arr[0], arr[1]);