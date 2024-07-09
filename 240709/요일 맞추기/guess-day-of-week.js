const fs = require('fs');
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dates = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const getDaysInterval = (m1, d1, m2, d2) => {
    const isNegative = m1 > m2 || (m1 === m2 && d1 > d2) ? true : false;
    let totalDays = 0;
    if (m1 > m2) {
        for (let i = m2; i < m1; i += 1) {
            totalDays += num_of_days[i];
        }
    }

    if (m1 < m2) {
        for (let i = m1; i < m2; i += 1) {
            totalDays += num_of_days[i];
        }
    }

    totalDays += Math.abs(d1 - d2);
    return [totalDays, isNegative];
}

const getDate = (m1, d1, m2, d2) => {
    const [totalDays, isNegative] = getDaysInterval(m1, d1, m2, d2);
    const date = getIndex(totalDays, isNegative)
    return date;
}

const getIndex = (totalDays, isNegative) => {
    const index = isNegative ?  dates.length + -1 * (totalDays % 7) : dates.length + totalDays % 7;
    return dates[index];
}

console.log(getDate(m1, d1, m2, d2));

// 다시 생각해보자

// m1 > m2
// 음수인지 알고 월에 따른 일수 - d2 + d1

// m1 < m2
// 월에 따른 일수 - d1 + d2

// m1 === m2
// 음수인지 알고, | d1 - d2 |