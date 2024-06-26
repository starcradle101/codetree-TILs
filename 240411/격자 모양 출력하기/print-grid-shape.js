const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [size, pointNum] = input[0].split(' ').map(Number);
let points = input.slice(1).map(el => el.split(' ').map(Number));
let arr2d = Array(size)
	.fill(0)
	.map(() => Array(size).fill(0));

for (let i = 0; i < pointNum; i += 1) {
    let coordinate = points[i];
    let x = coordinate[0] - 1;
    let y = coordinate[1] - 1;
    arr2d[x][y] = (x + 1) * (y + 1);
}

for (let i = 0; i < size; i += 1) {
    let result = '';
    for (let j = 0; j < size; j += 1) {
        result += arr2d[i][j] + ' ';
    }
    console.log(result);
}