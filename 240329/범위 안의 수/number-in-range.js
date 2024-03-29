const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input >= 10 && input <= 20) {
    console.log('yes');
} else {
    console.log('no');
}