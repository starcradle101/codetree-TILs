const fs = require('fs');
let string = fs.readFileSync(0).toString().trim().split(' ');
let [charCode1, charCode2] = string.map(el => el.charCodeAt());

const charCodeSum = charCode1 + charCode2;
const charCodeSub = (charCode1 > charCode2) ? charCode1 - charCode2 : charCode2 - charCode1;

console.log(charCodeSum, charCodeSub);