const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const power = (a, b) => {
    let result = a;
    for (let i = 0; i < b- 1; i += 1 ) {
        result *= a;
    }
    return result;
}

let answer = power(a,b);
console.log(answer);