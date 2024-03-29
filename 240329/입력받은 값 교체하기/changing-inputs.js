const fs = require('fs');
let input = fs.readFilesync(0).toString().split(' ').map(el => {
  Number(el);
});

let [b, a] = input;

console.log(a, b);