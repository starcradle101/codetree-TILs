const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 큰 수 + 25, 작은 수 * 2

function mutate(arr) {
    let [a, b] = arr;
    if ( a > b) {
        a += 25;
        b *= 2;
    } else {
        a *= 2;
        b += 25;
    }

    return [a, b];
}

let result = mutate(arr).join(' ');

console.log(result)