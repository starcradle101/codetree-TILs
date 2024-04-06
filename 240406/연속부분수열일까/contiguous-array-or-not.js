const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [sequenceALength, sequenceBLength] = input[0].split(' ').map(Number);
let sequenceA = input[1].split(' ').map(Number);
let sequenceB = input[2].split(' ').map(Number);

let flag = false;

for (let i = 0; i < sequenceALength; i += 1) {
    if (sequenceA[i] === sequenceB[0]) {
        let cnt = 0;
        for (let j = 0; j < sequenceBLength; j += 1) {
            if (sequenceA[i + j] === sequenceB[j]) {
                cnt += 1;
            }
            
        }
        if (cnt === sequenceB.length) {
            flag = true;
            break;
        } else {
            continue;
        }
    }
}

console.log(flag ? 'Yes': 'No');