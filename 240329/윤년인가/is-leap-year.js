const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

console.log((input % 4 === 0) || (input % 100 !== 0 && input % 400 === 0));

// 4로 나누어 떨어지거나
// 100으로 나누어 떨어지지 않고 400으로 나누어 떨어지는 해가 윤년
// 둘 중 하나만 만족하면 되는 거 아닌가?