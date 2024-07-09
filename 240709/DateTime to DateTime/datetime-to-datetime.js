const fs = require('fs');
const [day, hour, minute] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const standardTotalMinutes = 11 * 24 * 60 + 11 * 60 + 11;

const totalMinutes = day * 24 * 60 + hour * 60 + minute;

const answer = (totalMinutes < standardTotalMinutes) ? -1 : totalMinutes - standardTotalMinutes;

console.log(answer)