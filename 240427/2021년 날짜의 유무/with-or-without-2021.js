const fs = require('fs');
const [month, day] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// M월 D일, 존재한다면 Yes, 아니라면 No

function isCorrectDate(month, day) {
    const daysPerMonth = [
        31, // January
        28,
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31  // December
    ];
    if (month > daysPerMonth.length) return 'No';
    if (daysPerMonth[month - 1] < day) return 'No';

    return 'Yes';
}

let answer = isCorrectDate(month, day);
console.log(answer)


//