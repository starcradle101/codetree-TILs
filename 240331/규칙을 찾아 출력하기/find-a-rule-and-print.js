const fs = require('fs');
let n = Number((fs.readFileSync(0).toString()));

let result = '';

for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
        result += '* '.repeat(n).trim() + '\n';
    } else {
        result += '* ' + '  '.repeat(n - 2) + '*\n';
    }
}

console.log(result)

// n = 3
// * * *
// *   *
// * * *

// n = 4
// * * * *
// *     *
// * *   *
// * * * *

// n = 5
// * * * * *
// *       *
// * *     *
// * * *   *
// * * * * *

// n = 6
// * * * * * *
// *         *
// * *       *
// * * *     *
// * * * *   *
// * * * * * *