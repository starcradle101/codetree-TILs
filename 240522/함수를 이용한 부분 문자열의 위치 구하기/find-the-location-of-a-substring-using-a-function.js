const fs = require('fs');
let [string, subString] = fs.readFileSync(0).toString().trim().split('\n');

function findSubIdx() {
    return string.indexOf(subString);
}

console.log(findSubIdx());