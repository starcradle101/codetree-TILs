const fs = require('fs');
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const getDays = (m, d) => {
    const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
    
    for (let i = 1; i < m; i += 1) {
        days += num_of_days[i];
    }

    days += d;
    return days;
}

const getDateInterval = (m1, d1, m2, d2) => {
    const daysA = getDays(m1, d1);
    const daysB = getDays(m2, d2);

    return daysB - daysA + 1;
}

console.log(getDateInterval(m1, d1, m2, d2));


// 날짜 계산시 시작일을 포함
// 윤년이 아닌 해라 28일까지만 계산
// 아니지 이렇게 할 게 아니지
// 예를 들어, m이 있을 경우
// m 전까지의 일수는 전부 합산
// m 당월의 날짜는 d를 확인하고
// d까지의 값만 더하면 된다