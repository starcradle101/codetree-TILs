const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true) {
    const line = input[idx].split(' ');
    const [width, height] = line.slice(0, 2).map(Number);
    const area = width * height;
    
    console.log(area);
    
    idx += 1;

    if(line[2] === 'C') break;
}