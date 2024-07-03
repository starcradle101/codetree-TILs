class Element {
    constructor(height, weight, index = 0) {
        this.height = height;
        this.weight = weight;
        this.index = index;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const studentsRawData = input.slice(1).map(el => el.split(' ').map(Number))
const students = [];

for (let i = 0; i < studentsRawData.length; i += 1) {
    students.push(new Element(...studentsRawData[i], i + 1));
}

const cmp = (a, b) => {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }
    return a.height - b.height;
}

students.sort(cmp);

for (let student of students) {
    console.log(`${student.height} ${student.weight} ${student.index}`)
}
// 키가 더 작은 학생
// 키가 같다면, 몸무게가 더 큰 학생