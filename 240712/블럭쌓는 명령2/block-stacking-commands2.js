const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [range, numOfOrder] = input[0].split(' ').map(Number);
const orders = input.slice(1).map(el => el.split(' ').map(Number));
let arr = Array(range).fill(0);

for (let order of orders) {
    const [start, end] = order;
    for(let i = start - 1; i < end; i += 1) {
        arr[i] += 1;
    }
}

console.log(Math.max(...arr));

// 먼저 1차원 구간이구만
// 이건 1로 표시해서 구하면 된다

// n칸, k번의 명령
// 각 명령마다 쌓는 블럭은 정해져 있다.