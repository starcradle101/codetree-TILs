const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const length = Number(input[0]);
const words = input.slice(1, length + 1);
const queryChar = input[length + 1];

let queryArr = [];

for (let word of words) {
    if (word[0] === queryChar) queryArr.push(word);
}

let totalQueryStringSize = 0;
let queryArrLength = queryArr.length;

for (let word of queryArr) {
    totalQueryStringSize += word.length;
}

let avgQueryStringSize = (totalQueryStringSize / queryArrLength).toFixed(2);
console.log(queryArrLength, avgQueryStringSize);

// 배열로 저장해 두는게 속 편하겠구만