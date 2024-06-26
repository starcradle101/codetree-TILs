const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

class Info {
    constructor (id, level) {
        this.id = id;
        this.level = level;
    }
}

const user1 = new Info('codetree', 10);
const user2 = new Info(...input);

console.log(`user ${user1.id} lv ${user1.level}`);
console.log(`user ${user2.id} lv ${user2.level}`);

// 객체에 초기값을 주고 싶다면 멤버 변수에 0을 넣어주면 됨