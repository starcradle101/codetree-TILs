const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input === 2) {
    console.log(28);
} else {
    if (input === 1 || input === 3 || input === 5 || input === 7 || input === 8 || input === 10 || input === 12) {
        console.log(31);
    } else {
        console.log(30);
    }
}