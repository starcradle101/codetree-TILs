const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let [length1, length2]  = input.map(el => el.length);


if (length1 > length2) {
    console.log(input[0], length1)
} else if (length1 < length2) {
    console.log(input[1], length2)
} else {
    console.log('same')
}