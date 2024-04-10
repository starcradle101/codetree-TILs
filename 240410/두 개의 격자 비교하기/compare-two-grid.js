const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);

// 격자에 위치하는 숫자가 같다면 0, 아니라면 1을 할당
// 2n개의 줄 (1부터 2n까지)
// 첫 번째 배열 1부터 n-1까지
// 두 번째 배열 n부터 2n까지


let arr1 = [];
for (let i = 1; i <= n; i += 1) {
    arr1.push(input[i].split(' ').map(Number));
}

let arr2 = [];
for (let i = n + 1; i <= n * 2; i += 1) {
    arr2.push(input[i].split(' ').map(Number));
}

let arrCheck = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
        arrCheck[i][j] = (arr1[i][j] === arr2[i][j]) ? 0 : 1;
    }
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    for (let j = 0; j < m; j += 1) {
        result += arrCheck[i][j] + ' ';
    }
    console.log(result);
}