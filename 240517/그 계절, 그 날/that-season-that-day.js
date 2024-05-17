const fs = require('fs');
let [year, month, day] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function findSeason(Y, M, D) {
    // 윤년 여부 확인 함수
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // 해당 월의 마지막 날짜를 반환하는 함수
    function getLastDayOfMonth(year, month) {
        switch (month) {
            case 2:
                return isLeapYear(year) ? 29 : 28;
            case 4: case 6: case 9: case 11:
                return 30;
            default:
                return 31;
        }
    }

    // 날짜 유효성 검사
    if (D < 1 || D > getLastDayOfMonth(Y, M)) {
        return -1;
    }

    // 계절 판별
    if (M >= 3 && M <= 5) {
        return "Spring";
    } else if (M >= 6 && M <= 8) {
        return "Summer";
    } else if (M >= 9 && M <= 11) {
        return "Fall";
    } else {
        return "Winter";
    }
}

let result = findSeason(year, month, day);
console.log(result);