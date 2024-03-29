const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = Number(input[0]), b = Number(input[1]), c = Number(input[2]);

if (a >= b && a >= c ) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}