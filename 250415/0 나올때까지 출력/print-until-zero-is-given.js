const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true) {
    if(arr[idx] === 0) break;
    console.log(arr[idx]);
    idx += 1;
}