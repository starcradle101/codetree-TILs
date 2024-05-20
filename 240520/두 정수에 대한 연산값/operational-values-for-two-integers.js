const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 큰 수 + 25, 작은 수 * 2

function mutate(a, b) {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);

    return [bigger + 25, smaller * 2];
}

let result = mutate(a, b).join(' ');

console.log(result)