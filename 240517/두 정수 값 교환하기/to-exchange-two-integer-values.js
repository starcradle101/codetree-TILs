const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);

const swap = (a, b) => {
    return [b,a].join(' ');
};

result = swap(a,b);
console.log(result);