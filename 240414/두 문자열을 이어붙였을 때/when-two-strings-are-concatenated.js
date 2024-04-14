const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input;

if ( (a + b) === (b + a) ) {
    console.log(true);
} else {
    console.log(false);
}