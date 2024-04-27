const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [sizeA, sizeB] = input[0].split(' ').map(Number);
const seriesA = input[1].split(' ').map(Number);
const seriesB = input[2].split(' ').map(Number);

// B가 A의 원소들을 연속하게 뽑았을 때 나올 수 있는 수열이라면 연속부분 수열

function isConsecutiveNumberSubSequence(seriesA, seriesB, sizeA, sizeB) {
    let answer = 'No';
    // B와 일치하는 수열의 시작을 A에서 찾았을 때
    // 남은 길이를 먼저 확인해서 길이가 충분하지 않다면 NO
    // 길이가 일치한다면 배열을 끝까지 돌면서
    // break 없이 돌았다면
    // 연속부분수열이다

    for (let i = 0; i < sizeA; i += 1) {
        if (seriesA[i] === seriesB[0]) {
            if (sizeA - seriesA[i] - 1 === sizeB) {
                break;
            } else {
                let index = seriesA[i]
                for (let j = 0; j < sizeB; j += 1) {
                    if (seriesA[index + j] !== seriesB[j]) break;
                }
                answer = 'Yes';
            }
            
        }
    }
    return answer;
}

let result = isConsecutiveNumberSubSequence(seriesA,seriesB,sizeA,sizeB);
console.log(result)