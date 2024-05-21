const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

const moreTwoAlphabets = (string) => {
    let areMoreTwoAlphabets = false;
    const checkChar = string[0]
    for (let char of string) {
        if (checkChar !== char) {
            areMoreTwoAlphabets = true;
            break;
        }
        else {
            continue;
        }
    }
    return areMoreTwoAlphabets;
}

console.log(moreTwoAlphabets(input) ? 'Yes' : 'No');