const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

if (input === 'a') {
    console.log('z');
} else {
    console.log(String.fromCharCode(input.charCodeAt() - 1));
}