const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ');

let ab = Number(a + b);
let ba = Number(b + a);

let result = Number(ab) + Number(ba);

console.log(result)