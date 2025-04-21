const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
let answer = 0;

const line = new Array(201).fill(0);
const start = 100;

for(let command of commands) {
    let [x, direction] = command.split(' ');
    x = Number(x);

    if(direction === 'L') {
        for(let i = start; i <= start + x; i += 1) {
            line[i] += 1;
        }
    } else {
        for(let i = start + x; i >= start; i -= 1) {
            line[i] += 1;
        }
    }
}

for(let i = 0; i < line.length - 1; i += 1) {
    if(line[i] >= 2 && line[i + 1] >= 2) {
        answer += 1;
    }
}

console.log(answer)