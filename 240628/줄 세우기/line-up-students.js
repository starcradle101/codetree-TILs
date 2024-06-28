// 기준
// 1. 키 내림차순
// 2. 키가 동일하다면, 몸무게 내림차순
// 3. 그 다음은 번호 오름차순
// 번호는 입력된 순간에 부여한다

class StudentData {
    constructor(height = 0, weight = 0, number = 0) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const num = Number(input[0]);
let students = [];

const cmp = (a, b) => {
    if (a.height === b.height) {
        if (a.weight === b.weight) {
            return a.number - b.number;
        }
        return b.weight - a.weight;
    }
    return b.height - a.height;
}

for (let i = 1; i <= num; i += 1) {
    let [height, weight] = input[i].split(' ');
    students.push(new StudentData( Number(height), Number(weight), i));
}

students.sort(cmp);

students.forEach(el => console.log(`${el.height} ${el.weight} ${el.number}`))