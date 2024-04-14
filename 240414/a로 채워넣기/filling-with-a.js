const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('');

let length = input.length;

input[1] = 'a';
input[length - 2] = 'a';

console.log(input.join(''));
// 앞에서 두번째 뒤에서 두 번째