const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n)
	.fill(0)
	.map(() => Array(n).fill(0));

for (let i = 0; i < n; i += 1) {
	arr2d[i][0] = 1;
	arr2d[0][i] = 1;
}

for (let i = 1; i < n; i += 1) {
	for (let j = 1; j < n; j += 1) {
		arr2d[i][j] = arr2d[i][j - 1] + arr2d[i - 1][j - 1] + arr2d[i - 1][j];
	}
}

for (let i = 0; i < n; i += 1) {
	let result = '';
	for (let j = 0; j < n; j += 1) {
		result += arr2d[i][j] + ' ';
	}
	console.log(result);
}