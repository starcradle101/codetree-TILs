const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let year = Number(input[0]);
let carPrices = input[1].split(' ').map(Number);
let profits = [0];

for (let i = 0; i < year - 1; i += 1) {
	for (let j = i + 1; j < year; j += 1) {
		profits.push(carPrices[j] - carPrices[i]);
	}
}

let maxProfit = Math.max(...profits);

console.log(maxProfit);