const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

console.log(Math.max(...arr));

// 재귀 함수를 이용해서 최댓값을...?

// 어떤 로직을 계속해서 실행

// 일반적으로 최댓값을 구하는 로직 -> 한바퀴를 돌면서 Max를 비교해서 저장
// 이걸 재귀로...?
// 재귀로 돌릴 경우 '저장'이라는 개념을 적용할 수 없음
// 그런데 '저장'해야 비교할 수 있고, 그렇지 않다면