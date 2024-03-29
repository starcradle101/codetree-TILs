const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let aMath = Number(input[0][0]);
let aEnglish = Number(input[0][1]);
let bMath = Number(input[1][0]);
let bEnglish = Number(input[1][1]);

if (aEnglish > bEnglish && aMath > bMath) {
    console.log(1)
} else {
    console.log(0)
}