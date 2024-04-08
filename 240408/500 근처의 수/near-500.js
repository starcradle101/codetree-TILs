const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

// 500미만의 수 중 가장 큰 수와 500 초과의 수 중 가장 작은 수

let maxUnder500 = -Infinity;
let minOver500 = Infinity;

for (let i = 0; i < input.length; i += 1) {
	if (input[i] < 500 && input[i] > maxUnder500) {
		maxUnder500 = input[i];
	}

	if (input[i] > 500 && input[i] < minOver500) {
		minOver500 = input[i];
	}
}

console.log(maxUnder500, minOver500);