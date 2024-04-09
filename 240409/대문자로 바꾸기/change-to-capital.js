const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];

for (let i = 0; i < 5; i++) {
	arr2d.push(input[i].split(' '));
}

let result = '';
for (let i = 0; i < 5; i += 1) {
	result += arr2d[i].map(el => el.toUpperCase()).join(' ') + '\n'
}

console.log(result);