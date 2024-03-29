const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

let scoreA = input[0].split(' ');
let aMath = Number(scoreA[0]);
let aEnglish = Number(scoreA[1]);
let scoreB = input[1].split(' ');
let bMath = Number(scoreB[0]);
let bEnglish = Number(scoreB[1]);

if (aMath > bMath) {
    console.log('A');
} else if (aMath === bMath) {
    console.log(aEnglish > bEnglish ? 'A' : 'B');
} else {
    console.log('B')
}
// 수학점수 먼저 
// 같다면 영어점수