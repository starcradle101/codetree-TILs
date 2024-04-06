const INT_MIN = Number.MAX_SAFE_INTEGER;

const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let length = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let min = INT_MIN;
for (let i = 0; i < length; i += 1) {
	if (arr[i] < min) min = arr[i];
}

let cnt = 0;
for (let i = 0; i < length; i += 1) {
    if (arr[i] === min) cnt += 1;
}

console.log(min, cnt);