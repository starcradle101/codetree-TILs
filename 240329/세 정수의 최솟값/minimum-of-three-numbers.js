const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let min; 

if (a <= b && a <= c) {
    min = a;
} else if (b <= a && b <= c) {
    min = b;
} else if (c <= a && c <= b) {
    min = c;
}

console.log(min)