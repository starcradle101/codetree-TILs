const fs = require('fs');
const year = Number(fs.readFileSync(0).toString().trim());

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

let result = isLeapYear(year);
console.log(result)