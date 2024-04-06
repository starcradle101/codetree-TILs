// n1개의 원소로 이루어진 수열 A
// n2개의 원소로 이루어진 수열 B

// B가 A의 연속부분수열인가?

// 즉, B 내부의 연속된 원소의 수가 A 내부의 원소의 배치와 일치해야 함 -> 슬라이딩 윈도우?

const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let [sequenceALength, sequenceBLength] = input[0].split(' ').map(Number);
let sequenceA = input[1].split(' ').map(Number);
let sequenceB = input[2].split(' ').map(Number);

let flag = false;

for (let i = 0; i < sequenceALength; i += 1) {
    if (sequenceA[i] === sequenceB[i]) {
        for (let j = 0; j < sequenceBLength; j += 1) {
            console.log(sequenceA[i + j], sequenceB[j])
            if (sequenceA[i + j] === sequenceB[j]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
}

console.log(flag ? 'Yes': 'No');