const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)
let answer = 0;

// m이 1이 되기 전까지 
// m이 홀수면 1 빼기
// 짝수면 2로 나누기
// A의 m번째 원소를 계속 더해 출력하기

function mutateM() {
    if (m % 2 === 1) {
        m -= 1;

    } else {
        m = parseInt(m/2);

    }
}

function solution() {
    while (true) {
        answer += arr[m - 1];
        mutateM();
        if (m < 1) break;
    }
}

solution();
console.log(answer)