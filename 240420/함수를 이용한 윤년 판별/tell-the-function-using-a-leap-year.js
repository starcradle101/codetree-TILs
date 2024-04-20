const fs = require('fs');
const year = Number(fs.readFileSync(0).toString().trim());

const isLeapYear = (year) => {
    if (year % 4 === 0 || year % 100 !== 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

let result = isLeapYear(year);
console.log(result)