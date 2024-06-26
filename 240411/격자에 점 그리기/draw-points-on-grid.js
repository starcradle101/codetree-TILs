const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

// m개의 점이 주어졌을 때 n * n 크기의 격자에 번호를 표시에 출력하는 것
// 점의 번호는 정보가 주어지지 않고 입력된 순서대로 들어간다

let [size, pointNum] = input[0].split(' ').map(Number);
let points = input.slice(1).map(el => el.split(' ').map(Number));
let cnt = 1;
let arr2d = Array(size)
	.fill(0)
	.map(() => Array(size).fill(0));

for (let i = 0; i < pointNum; i += 1) {
    let coordinate = points[i];
    arr2d[coordinate[0] - 1][coordinate[1] - 1] = cnt++;
}

for (let i = 0; i < size; i += 1) {
    let result = '';
    for (let j = 0; j < size; j += 1) {
        result += arr2d[i][j] + ' ';
    }
    console.log(result);
}