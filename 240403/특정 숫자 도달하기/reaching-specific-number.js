const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let filteredArr = [];
let [sum, avg] = [0, 0];

for (let el of arr) {
    if (el >= 250) {
        break;
    } else {
        filteredArr.push(el)
    }
}

for (let el of filteredArr) {
    sum += el;
}

let avg = (sum / filteredArr.length).toFixed(1);

console.log(sum, avg)

// 250 이상의 정수가 주어지면 마지막으로 주어진 수를 제외하고 주어진 모든 정수들의 합과 평균을 계산...
// 만약 배열에 250 이상의 정수가 없다면 10개의 합계와 평균을 계산