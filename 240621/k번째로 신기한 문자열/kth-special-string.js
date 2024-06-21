const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, query] = input[0].split(' ').map(el => Number(el) === el ? Number(el) : el);
const wordsArr = input.slice(1);

const queriedArr = wordsArr.map(el => {
    if (el.startsWith(query)) {
        return el;
    }
}).sort();

console.log(queriedArr[k - 1]);