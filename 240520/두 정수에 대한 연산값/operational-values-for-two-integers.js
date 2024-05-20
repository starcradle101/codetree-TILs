const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 큰 수 + 25, 작은 수 * 2

function mutate(a, b) {
    const bigger = math.Max(a, b);
    const smaller = math.Min(a, b);

    return [bigger + 25, smaller * 2];
}

let result = mutate(a, b).join(' ');

console.log(result)