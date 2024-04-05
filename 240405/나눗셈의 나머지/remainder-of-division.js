const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let a = input[0];
let b = input[1];
let remainderArray = Array(b).fill(0);

while (a > 1) {
	a = parseInt(a / b);
	let remainder = a % b;
	remainderArray[remainder] += 1;
}

let sum = 0;

for (let i = 0; i < b; i += 1) {
	sum += remainderArray[i] ** 2;
}

console.log(sum);