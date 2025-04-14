// 배수의 숫자 중 가장 큰 약수를 기점으로 한다

const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

// continue

let classroom_cnt = 0;
let corridor_cnt = 0;
let toilet_cnt = 0;

for(let i = 0; i <= input; i+= 1) {
    if (i % 12 === 0) {
    toilet_cnt++;
    continue;
  } else if (i % 3 === 0) {
    corridor_cnt++;
    continue;
  } else if (i % 2 === 0) {
    classroom_cnt++;
    continue;
  }
}

console.log(classroom_cnt, corridor_cnt, toilet_cnt);