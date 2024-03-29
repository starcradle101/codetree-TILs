const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let scoreA = input[0].split(' ');
let scoreB = input[1].split(' ');

let aMath = Number(scoreA[0]);
let aEnglish = Number(scoreA[1]);
let bMath = Number(scoreB[0]);
let bEnglish = Number(scoreB[1]);

if ( aMath > bMath && aEnglish > bEnglish) {
    console.log(1)
} else {
    console.log(0)
}