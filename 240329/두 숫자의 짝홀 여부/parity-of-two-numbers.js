const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = input[0];
let b = input[1];

if (a % 2 === 0) {
    console.log('even')
} else {
    console.log('odd');
}

if (b % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}