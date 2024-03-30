const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, n] = [Number(input[0]), Number(input[1])];

for (let i = 0; i < n; i += 1) {
    a += n;
    console.log(a);
}