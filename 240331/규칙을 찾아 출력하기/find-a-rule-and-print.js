const fs = require('fs');
let n = Number((fs.readFileSync(0).toString()));

// 윗 줄과 밑 줄 ->  n개 출력 (1일때는 하나만)

let result = '';

result += '* '.repeat(n) + '\n';

// 요 사이에 빈칸 채울 것
if (n >= 3) {
    for (let i = 1; i < n - 1; i += 1) {
        result += '* '.repeat(i) + ' '.repeat(i + 1) + '*\n';
    }
}

if (n > 1) {
    result += '* '.repeat(n);
}

console.log(result)

// 거꾸로 내려가는 모양
// n = 3
// 1

// n = 4
// 2
// 1

// n = 5
// 3
// 2
// 1

// n = 6
// 4
// 3
// 2
// 1

// n = 7
// 5
// 4
// 3
// 2
// 1