// 남녀 0 1
// 19세이상 성인

const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

const gender = Number(input[0]);
const age = Number(input[1]);

if (gender === 1) {
    console.log(age >= 19 ? 'WOMAN' : 'GIRL')
} else (
    console.log(age >= 19 ? 'MAN' : 'BOY')
)