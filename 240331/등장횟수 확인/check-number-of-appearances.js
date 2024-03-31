const fs = require('fs');
let input = ((fs.readFileSync(0).toString().split('\n')));

let result = 0;

for (let i = 0; i < 5; i += 1) {
    if(Number(input[i]) % 2 === 0) {
        result += 1;
    }
}

console.log(result)