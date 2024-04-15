const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

// slice 활용해서 자르기
// 앞에서 2번째 원소, 뒤에서 2번째 원소 제거

let answer = input.slice(0, 1) + input.slice(2, input.length - 3) + input.slice(input.length - 1);
console.log(answer)