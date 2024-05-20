const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

function checkPalindrome(str) {
    return input.split('').reverse().join('') === str ? 'Yes' : 'No';
}

console.log(checkPalindrome(input));

// reversse 씁시다~