const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [sizeA, sizeB] = input[0].split(' ').map(Number);
const seriesA = input[1].split(' ').map(Number);
const seriesB = input[2].split(' ').map(Number);

function isConsecutiveNumberSubSequence(seriesA, seriesB, sizeA, sizeB) {
	let answer = 'No';

	for (let i = 0; i < sizeA; i += 1) {
		if (seriesA[i] === seriesB[0]) {
			if (sizeA - seriesA[i] - 1 < sizeB) {
				break;
			} else {
				let index = seriesA[i];
				for (let j = 0; j < sizeB; j += 1) {
					if (seriesA[index + j] !== seriesB[j]) break;
				}
				answer = 'Yes';
				break;
			}
		}
	}
	return answer;
}

let result = isConsecutiveNumberSubSequence(seriesA, seriesB, sizeA, sizeB);
console.log(result);