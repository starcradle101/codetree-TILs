const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let eeResult = '';
let abResult = '';

if (input.includes('ee')) {
    eeResult += 'Yes';
} else {
    eeResult += 'No'
}

if (input.includes('ab')) {
    abResult += 'Yes';
} else {
    abResult += 'No'
}

console.log(eeResult + ' ' + abResult)