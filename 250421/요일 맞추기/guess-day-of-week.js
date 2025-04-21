const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const baseDayIndex = 0;

const delta = getDaysFromStart(m2, d2) - getDaysFromStart(m1 ,d1);

const targetIndex = (baseDayIndex + delta % 7 + 7) % 7;
console.log(days[targetIndex]);

function getDaysFromStart(month, day) {
    let days = 0;
    for(let i = 0; i < month - 1; i += 1) {
        days += daysInMonth[i];
    }
    days += day - 1;
    return days;
}