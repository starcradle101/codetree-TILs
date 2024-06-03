const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function printInOrder(n) {
    if (n < 1) {
        return;
    }
    printInOrder(n - 1);
    process.stdout.write(`${n} `);
}

function printInReverseOrder(n) {
    if (n < 1) {
        return;
    }
    process.stdout.write(`${n} `);
    printInReverseOrder(n - 1);
}

printInOrder(input);
process.stdout.write('\n')
printInReverseOrder(input);