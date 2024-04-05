const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let clinics = Array(4).fill(0);

for (let i = 0; i < 3; i += 1) {
    const person = input[i].split(' ');
    const isSymptom = person[0];
    const temperature = +person[1];
    if(isSymptom === 'Y' && temperature >= 37) {
        clinics[0] += 1;
    } else if (isSymptom === 'N' && temperature >= 37) {
        clinics[1] += 1;
    } else if (isSymptom === 'Y' && temperature < 37) {
        clinics[2] += 1;
    } else {
        clinics[3] += 1;
    }
}

let result = '';

for (let i = 0; i < 4; i += 1) {
    result += `${clinics[i]} `;
}
if (clinics[0] >= 2) {
    result += 'E';
}

console.log(result)

// 3명씩 검사 -> 입력값 크기 고정
//