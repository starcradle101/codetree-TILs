const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

let infoA = input[0].split(' ');
let infoB = input[1].split(' ');

let sexA = infoA[1].trim();
let ageA = Number(infoA[0]);
let sexB = infoB[1].trim();
let ageB = Number(infoB[0]);

if ((ageA >= 19 && sexA === 'M') || (ageB >= 19 || sexB === 'M')) {
    console.log(1);
} else {
    console.log(0)
}