const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];

let n = 4;
for (let i = 0; i < 4; i++) {
	arr2d.push(input[i].split(' ').map(Number));
}

let result = '';
for (let i = 0; i < n; i += 1) {
	let sum = 0;
	for (let j = 0; j < n; j += 1) {
		sum += input[i][j];
	}
	result += sum + '\n';
}

console.log(result);