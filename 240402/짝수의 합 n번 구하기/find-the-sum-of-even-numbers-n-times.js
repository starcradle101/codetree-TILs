const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

let result = '';

let n = Number(input[0]);
for (let i = 1; i <= n; i += 1) {
    let sum = 0;
    let range = input[i].split(' ');
    let [start, end] = [Number(range[0]), Number(range[1])];
    for (let j = start; j <= end; j += 1) {
        if (j % 2 === 0) sum += j;
    }
    result += sum + '\n';
}

console.log(result)

// n이 주어지고, a부터 b까지의 모든 짝수를 합한 결과를 출력한다.