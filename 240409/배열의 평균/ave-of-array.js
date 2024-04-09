// 2행 4열
// 가로, 세로, 전체 평균을 소수 첫째 자리까지만 출력 (한 줄 씩)

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];

// 2차원 배열 생성하기
for (let i = 0; i < 2; i++) {
	arr2d.push(input[i].split(' ').map(Number));
}

// 가로 평균 구하기
let avgRowResult = '';
let totalSum = 0;
for (let i = 0; i < 2; i += 1) {
    let avgRow = 0;
    let sumRow =0;
    for (let j = 0; j < 4; j +=1) {
        sumRow += arr2d[i][j];
        totalSum += arr2d[i][j];
    }
    avgRow = (sumRow / 4).toFixed(1);
    avgRowResult += avgRow + ' ';
}
let avgTotal = '' + (totalSum / 8).toFixed(1);


let avgColumnResult = '';
for (let i = 0; i < 4; i += 1) {
    let avgColumn = 0;
    let sumColumn = 0;
    for (let j = 0; j < 2; j += 1) {
        sumColumn += arr2d[j][i];
    }
    avgColumn = (sumColumn / 2).toFixed(1);
    avgColumnResult += avgColumn + ' ';
}

let totalResult = avgRowResult + '\n' + avgColumnResult + '\n' + avgTotal;

console.log(totalResult)