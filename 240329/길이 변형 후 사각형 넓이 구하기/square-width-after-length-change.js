const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let width = Number(input[0]);
let length = Number(input[1]);


width += 8;
length *= 3;

const area = width * length

console.log(`${width}\n${length}\n${area}`)