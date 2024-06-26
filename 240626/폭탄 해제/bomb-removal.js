class DefuseInfo {
    constructor (code = '', color = '', second = 0) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const defuseInfo = new DefuseInfo(input[0], input[1], +input[2]);

console.log(`code : ${defuseInfo.code}\ncolor : ${defuseInfo.color}\nsecond : ${defuseInfo.second}`);