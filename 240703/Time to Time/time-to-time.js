const fs = require('fs');
const [a, b, c, d] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const getTimeInterval = (a, b, c, d) => {
    const minutesA = a * 60 + b;
    const minutesB = c * 60 + d;

    return minutesB - minutesA;
}

console.log(getTimeInterval(a, b, c, d));


// 두 시간 사이의 격차를 구하는 것 보다
// 기준 시간에서 두 시간의 크기를 비교하는 것

// a: b부터 c: d까지 몇 분이 걸릴까요?