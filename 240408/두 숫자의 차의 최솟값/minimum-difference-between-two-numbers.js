const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let numbers = input[1].split(' ').map(Number);

let minimumDiff = Infinity;

for (let i = 0; i < length - 1; i += 1) {
	for (let j = i + 1; j < length; j += 1) {
		let diff = Math.abs(numbers[i] - numbers[j]);
		if (diff < minimumDiff) minimumDiff = diff;
	}
}

console.log(minimumDiff);