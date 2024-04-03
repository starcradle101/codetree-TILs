const fs = require('fs');
let n = (fs.readFileSync(0).toString().split(' '));
let result = 0;

n.map(el => {
    result += Number(el);
})

console.log(result)