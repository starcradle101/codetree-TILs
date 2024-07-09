const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const day = input[1];

function numOfDays(m, d) {
    // 계산 편의를 위해 월마다 몇 일이 있는지를 적어줍니다.
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDays = 0;

    // 1월부터 (m - 1)월 까지는 전부 꽉 채워져 있습니다.
    for (let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    // m월의 경우에는 정확히 d일만 있습니다.
    totalDays += d;

    return totalDays;
}

let diff = numOfDays(m2, d2) - numOfDays(m1, d1) + 1;


let count = Math.floor(diff / 7) + (diff % 7 < days.indexOf(day) + 1 ? 0 : 1 );

console.log(count);