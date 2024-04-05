const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let [length, num] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let cnt = 0;

for (let i = 0; i < length; i += 1) {
	if (arr[i] === num) cnt += 1;
}

console.log(cnt);