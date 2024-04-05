const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let [elementNumber, queryNumber] = input[0].split(' ').map(Number);
let elementArray = input[1].split(' ').map(Number);
let queries = input.slice(2); // query 이차원 배열

for (let i = 0; i < queryNumber; i += 1) {
	let [queryCategory, queryElement] = queries[i].split(' ').map(Number);

	switch (queryCategory) {
		case 1:
			console.log(elementArray[queryElement - 1]);
			break;
		case 2:
			let idx = -1;
			for (let j = 0; j < elementNumber; j += 1) {
				if (elementArray[j] === queryElement) {
					idx = j + 1;
					break;
				}
			}

			if (idx === -1) {
				console.log(0);
			} else {
				console.log(idx);
			}

			break;
		case 3:
			let case3 = queries[i].split(' ').map(Number);
			let [start, end] = [case3[1], case3[2]];
			let result = '';

			for (let j = start - 1; j < end; j += 1) {
				result += elementArray[j] + ' ';
			}
			console.log(result);
	}
}