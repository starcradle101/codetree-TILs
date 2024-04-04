const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let arrBefore0 = [];
let result = '';

for (let i = 0; i < input.length; i += 1) {
	if (input[i] === 0) {
		break;
	}
	arrBefore0.push(input[i]);
}

let arrDigit = Array(11).fill(0);

for (let num of arrBefore0) {
	let digit = parseInt(num / 10);
	if (digit !== 0) {
		arrDigit[digit] += 1;
	}
}

console.log(arrDigit);

for (let j = 1; j <= arrBefore0.length; j += 1) {
	result += `${j} - ${arrDigit[j]}\n`;
}

console.log(result);