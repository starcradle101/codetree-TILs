const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [sizeA, sizeB] = input[0].split(' ').map(Number);
const seriesA = input[1].split(' ').map(Number);
const seriesB = input[2].split(' ').map(Number);

function isConsecutiveNumberSubSequence(seriesA, seriesB, sizeA, sizeB) {
    let answer = 'No';

    for (let i = 0; i <= sizeA - sizeB; i++) {
        if (seriesA[i] === seriesB[0]) {
            let isSubsequence = true;
            for (let j = 0; j < sizeB; j++) {
                if (seriesA[i + j] !== seriesB[j]) {
                    isSubsequence = false;
                    break;
                }
            }
            if (isSubsequence) {
                answer = 'Yes';
                break;
            }
        }
    }
    return answer;
}

let result = isConsecutiveNumberSubSequence(seriesA, seriesB, sizeA, sizeB);
console.log(result);