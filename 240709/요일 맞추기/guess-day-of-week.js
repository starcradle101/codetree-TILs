const fs = require('fs');
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dates = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const getDaysInterval = (m1, d1, m2, d2) => {
    const minusFlag = (m1 >= m2 && d1 > d2) || (m1 > m2) ? true : false;
    let totalDays = 0;
    const [mBefore, mAfter] = [m1, m2].sort((a,b) => a - b);

    for (let i = mBefore; i < mAfter; i += 1) {
        totalDays += num_of_days[i];
    }
    
    totalDays += Math.abs(d1 - d2)
    return [totalDays, minusFlag];
}

const getDate = (m1, d1, m2, d2) => {
    const [totalDays, minusFlag] = getDaysInterval(m1, d1, m2, d2);
    if (minusFlag) {
        const date = getNegativeIndex(dates, -1 * (totalDays % 7));
        return date;
    }

    const date = dates[totalDays%7]
    return date;
}

const getNegativeIndex = (array, negativeIndex) => {
    const index = array.length + negativeIndex;
    return array[index];
}

console.log(getDate(m1, d1, m2, d2));