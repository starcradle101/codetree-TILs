const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

const line = new Array(201).fill(0);
let start = 100;

for (let command of commands) {
  let [x, direction] = command.split(' ');
  x = Number(x);

  if (direction === 'L') {
    for (let i = start - 1; i >= start - x; i--) {
      line[i] += 1;
    }
    start -= x;
  } else {
    for (let i = start; i < start + x; i++) {
      line[i] += 1;
    }
    start += x;
  }
}

let answer = 0;
for (let i = 0; i < line.length; i++) {
  if (line[i] >= 2) {
    answer += 1;
  }
}

console.log(answer);
