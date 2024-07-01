class HealthData {
    constructor(name = '', height = 0, weight = 0) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let people = [];

// 이름 순으로 한 번
// 키 큰 순으로 한 번

for (let person of input) {
    const [name, height, weight] = person.split(' ');
    people.push(new HealthData(name, Number(height), Number(weight)));
}

console.log('name');
people.sort((a, b) => {
    if (a.name < b.name) return -1;
});
people.forEach(el => console.log(`${el.name} ${el.height} ${el.weight}`));

console.log('\nheight');
people.sort((a, b) => b.height - a.height);
people.forEach(el => console.log(`${el.name} ${el.height} ${el.weight}`));