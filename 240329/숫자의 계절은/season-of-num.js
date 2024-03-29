const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input >= 3 && input <= 5) {
    console.log('Spring');
} else if (input >= 6 && input <= 8) {
    console.log('Summer');
} else if (input >= 9 && input <= 11) {
    console.log('Fall');
} else {
    console.log('Winter')
}