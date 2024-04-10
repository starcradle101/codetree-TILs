const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

// 입력을 두 개의 이차원 배열로 분리하기
let arr1 = [];
for (let i = 0; i < 3; i += 1) {
    arr1.push(input[i].split(' ').map(Number));
}

let arr2 = [];
for (let i = 4; i < 7; i += 1) {
    arr2.push(input[i].split(' ').map(Number));
}

let [n, m] = [3, 3];
let arrMul = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
        arrMul[i][j] = arr1[i][j] * arr2[i][j];
    }
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    for (let j = 0; j < m; j += 1) {
        result += arrMul[i][j] + ' ';
    }
    console.log(result);
}