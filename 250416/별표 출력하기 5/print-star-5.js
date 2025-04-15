const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

// n의 개수에 따라
// 한 줄에 n개의 별을 n번씩 반복
// 이후 점차 줄여나감

// 삼중 반복문?

for(let i = 0; i < n; i += 1) {
    let line = '';
    for(let j = n - i; j > 0; j -= 1) {
        let stars = '';
        for(let k = n - i; k > 0; k -= 1) {
            stars += '*';
        }
        stars += ' ';
        line += stars;
    }
    console.log(line)
}