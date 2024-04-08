const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let indexArr = [];

while (!indexArr.includes(1)) {
	let max = 0;
	for (let i = 0; i < length; i += 1) {
		if (max < arr[i]) max = arr[i];
	}
    let indexOfMax = arr.indexOf(max);
	indexArr.push(arr.indexOf(max) + 1);
    arr = arr.slice(0, indexOfMax);
}

const answer = indexArr.join(' ');
console.log(answer);