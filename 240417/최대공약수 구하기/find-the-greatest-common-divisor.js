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
const input = (fs.readFileSync(0).toString().trim().split(' ').map(Number));
let [n ,m] = input;

const getGCD = (n, m) => {
    let  gCD = 0;
    if (n >= m) {
        let remainder = n % m;
        while (remainder != 0) {
            n = m;
            m = remainder
            remainder = n % m;
        }
        gCD = m;
    } else {
        let remainder = m % n;
        while (remainder != 0) {
            m = n;
            n = remainder;
            remainder = m % n;
        }
    }
    console.log(gCD);
}

getGCD(n ,m);
// 최대공약수
// 나눌 수 있는 수 중 가장 큰 수
// 역시 유클리드 호제법인가...
// 주어진 두 수를 A와 B라고 합시다. (A ≥ B) 대소비교 먼저 할 것
// A를 B로 나눈 나머지를 구합니다.
// 나머지가 0이면, B가 최대공약수가 됩니다. 즉, 최대공약수를 찾았습니다.
// 나머지가 0이 아니라면, 이전 단계에서의 나머지를 새로운 A로, 이전 단계의 B를 새로운 B로 설정하고, 2번부터 반복합니다.
// while 써서 해결해야지