const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
let answer = 0;

const line = new Array(201).fill(0);
const start = 100;

for(let command of commands) {
    const x = Number(command[0]);
    const direction = command[2];

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



// Please Write your code here.

// 2번 이상 지나간 영역의 크기를 출력 
// xL 왼쪽으로 x
// xR 오른쪽으로 x

// 케이스를 바탕으로 계산 -> 길이 201인 배열, 시작 인덱스는 0
// 음수일떄와 양수일 때 반복문이 다름