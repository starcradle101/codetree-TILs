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

// 바깥 for문은 다 돌지 않고 나가야 함. 언제? 모든 비교가 끝났을 때

// 의사코드
// 먼저 수열 A를 돌면서 A의 원소 중 B의 시작과 일치하는 부분이 있는지 확인
// 일치한다면
    // 수열 B를 돌면서 B 수열 전체가 일치하는지 확인
    // 전체가 일치한다면 -> 여기서 바로 다이렉트로 빠져나가기
    // 일치하지 않는다면 -> 바깥 for문 계속 돌기
// 일치하지 않는다면
    // false인 flag 반환

console.log(flag ? 'Yes': 'No');