const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let length = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let countMap = {};

for (let i = 0; i < length; i++) {
    if (countMap[arr[i]]) {
        countMap[arr[i]] += 1;
    } else {
        countMap[arr[i]] = 1;
    }
}

let maxNonDuplicate = -1;
for (let key in countMap) {
    if (countMap[key] === 1 && Number(key) > maxNonDuplicate) {
        maxNonDuplicate = Number(key);
    }
}

console.log(maxNonDuplicate);