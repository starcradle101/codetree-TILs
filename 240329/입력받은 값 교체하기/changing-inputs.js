const fs = require('fs');
let input = fs.readFilesync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

let [a, b] = [b, a];

console.log(a, b);