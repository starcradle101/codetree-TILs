const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const words = input.slice(1);

words.sort().forEach(el => {
    console.log(el);
})