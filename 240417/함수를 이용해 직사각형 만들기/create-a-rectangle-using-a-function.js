// function printRect(n, m) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             process.stdout.write("*");
//         }
//         process.stdout.write("\n");
//     }
// }

// process.stdout.write를 사용하면 한 줄에 전부 출력이 가능
// 단 괄호 안에는 문자열만 들어가야 한다.

const fs = require('fs');
let input = (fs.readFileSync(0).toString().trim().split(' ').map(Number));
let [n, m] = input;

const printRect = (n, m) => {
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
            process.stdout.write('1');
        }
        process.stdout.write('\n');
    }
}

printRect(n, m)