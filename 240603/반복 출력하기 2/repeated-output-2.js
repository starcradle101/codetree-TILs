const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

function printHelloWorld(n) {
    if (n < 1) {
        return;
    }
    console.log('HelloWorld');
    printHelloWorld(n - 1);
}

printHelloWorld(input);