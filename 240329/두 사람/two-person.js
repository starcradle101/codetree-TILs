const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

let infoA = input[0].split(' ');
let infoB = input[1].split(' ');

let sexA = infoA[0].trim();
let ageA = Number(infoA[1]);
let sexB = infoB[0].trim();
let ageB = Number(infoB[1]);

if ((ageA >= 19 || ageB >= 19) && (sexA === 'M' || sexB === 'M')) {
    console.log(1);
} else {
    console.log(0)
}