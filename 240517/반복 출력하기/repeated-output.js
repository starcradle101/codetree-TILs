const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const printString = (time) => {
    for (let i = 0; i < time; i += 1) {
        console.log('12345^&*()_');
    }
}

printString(input);