class Body {
    constructor(name = '', height = 0, weight = 0) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const num = Number(input[0]);
let healthData = [];

for (let i = 1; i <= num; i += 1) {
    let [name, height, weight] = input[i].split(' ');
    healthData.push(new Body(name, +height, +weight));
}

healthData.sort((a, b) => a.height - b.height);

for (let member of healthData) {
    console.log(`${member.name} ${member.height} ${member.weight}`)
}