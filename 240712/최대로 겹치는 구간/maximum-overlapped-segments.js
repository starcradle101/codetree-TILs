const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = Array(201).fill(0);
let lines = input.slice(1).map(el => el.split(' ').map(Number));
const offSet = 100;

for (let i = 0; i < lines.length; i += 1) {
    lines[i][0] += offSet;
    lines[i][1] += offSet;
}

for (let line of lines) {
    let [start, end] = line;
    for (let i = start; i < end; i += 1) {
        arr[i] += 1;
    }
}

console.log(Math.max(...arr));