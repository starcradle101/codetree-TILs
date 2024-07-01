// 키를 기준으로 오름차순 정렬
// 키가 동일하다면 몸무게가 더 큰 사람이 먼저 나와야 함

class HealthData {
    constructor(name = '', height = 0, weight = 0) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);
let people = [];

for (let person of input) {
    const [name, height, weight] = person.split(' ');
    people.push(new HealthData(name, Number(height), Number(weight)));
}

function cmp(a, b) {
    if(a.height === b.height) {
        return b.weight - a.weight;
    }

    return a.height - b.height;
}

people.sort(cmp);
people.forEach(el => console.log(`${el.name} ${el.height} ${el.weight}`))