const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1;
let arr2d = Array(n)
	.fill(0)
	.map(() => Array(n).fill(0));

// n -1 부터 시작해서 -2씩 갈 때는 아래에서 위로
// n -2부터 시작해서 -2씩 갈 때는 위에서 아래로

for (let i = n - 1; i >= 0; i -= 2) {
    if (i % 2 === 1) {
        for (let j = n - 1; j >= 0; j -= 1) {
            arr2d[j][i] = cnt++;
        }
    } else {
        for(let j = 0; j < n; j += 1) {
            arr2d[j][i] = cnt++;
        }
    }
    
}

for (let i = 0; i < n; i += 1) {
    let result = '';
    for (let j = 0; j < n; j += 1) {
        result += arr2d[i][j] + ' ';
    }
    console.log(result);
}

// 홀수 짝수와 연관 없이, 마지막은 무조건 아래에서 위로 올라가게끔
// 아니면 cnt를 빼버리면 안 되나...?
// 아니다 그거랑 상관없이 마지막에서 시작해야 하고, 아래에서 위로 채워야 함