const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let [sum, cnt] = [0, 0];

for(let num of input) {
    if(num >= 0 && num <= 200) {
        sum += num;
        cnt += 1;
    }
}

const avg = (sum / cnt).toFixed(1);

console.log(sum, avg);
