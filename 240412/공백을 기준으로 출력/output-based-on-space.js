const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [str1, str2] = input;

let strArr = str1.split(' ').concat(str2.split(' ')).join('') ;
console.log(strArr)