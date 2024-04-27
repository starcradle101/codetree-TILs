const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

function getSeason(year, month, day) {
    const seasons = ["Winter", "Spring", "Summer", "Fall"];
    const monthSeasons = [3, 6, 9, 12];
    const isLeap = isLeapYear(year);
    let season = -1;

    for (let i = 0; i < monthSeasons.length; i++) {
        if (month <= monthSeasons[i]) {
            season = i;
            break;
        }
    }

    if (month === 2 && day === 29 && !isLeap) {
        return -1; // 윤년이 아닌데 2월 29일이면 존재하지 않는 날짜
    }

    if (month !== 2 && day > 30) {
        return -1; // 4, 6, 9, 11월은 30일까지만 있음
    }

    return season === -1 ? -1 : seasons[season];
}


let result = getSeason(...input)
console.log(result)