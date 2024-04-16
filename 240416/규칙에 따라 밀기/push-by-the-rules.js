const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let string = input[0];
const commands = input[1].split('');

for (let command of commands) {
    if (command === 'L') {
        string = string.slice(1) + string.slice(0, 1);
    } else {
        string = string.slice(-1) + string.slice(0, -1);
    }
}

console.log(string);