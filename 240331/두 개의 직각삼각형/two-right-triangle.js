const fs = require('fs');
let n = (fs.readFileSync(0).toString().split(' '));

// 공백의 갯수 찾기
// 별의 갯수 = n * 2개
// 공백의 갯수 = 2(i) 개

let triangles = '';

for (let i = n; i >= 1; i -= 1 ) {
    triangles += '*'.repeat(parseInt(i)) + ' '.repeat(2 * (n - i)) + '*'.repeat(parseInt(i)) + '\n';
}

console.log(triangles);