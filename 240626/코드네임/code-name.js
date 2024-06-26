class Agent {
    constructor (name = '', score = 0) {
        this.name = name;
        this.score = score;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(el => el.split(' '));

const agent = input.map(member => new Agent(member[0], Number(member[1])));
let lowestAgent = agent[0];

for (let member of agent) {
    if (member.score < lowestAgent.score) {
        lowestAgent = member;
    }
}

console.log(`${lowestAgent.name} ${lowestAgent.score}`);