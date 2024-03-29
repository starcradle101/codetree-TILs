const fs = require('fs');
let input = fs.readFileSync(0).toString();

let a = Number(input);

if (a < 10 || a > 20) {
    console.log('yes')
} else {
    console.log('no');
}