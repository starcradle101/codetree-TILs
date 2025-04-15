const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true) {
    if(idx > 2) break;

    if(arr[idx] % 2 === 0) {
        console.log(parseInt(arr[idx] / 2));
        idx += 1;
    }
}

