const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const mutate = (arr) => {
    let [a, b] = arr;
    if (a > b) {
        a *= 2;
        b += 10;
    } else {
        a += 10;
        b *= 2;
    }

    return [a ,b].join(' ');
}

console.log(mutate(input));