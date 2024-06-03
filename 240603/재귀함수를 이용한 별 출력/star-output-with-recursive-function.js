const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const printStars = (n) => {
    if (n < 1) {
        return
    }
    
    printStars(n - 1);
    for (let i = 0; i < n; i += 1) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}

printStars(input);