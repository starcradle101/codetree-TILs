const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [string, queryNumber] = input[0].split(' ');
let queries = input.slice(1).map(Number);

for (query of queries) {
    switch(query) {
        case 1:
            string = string.slice(1) + string.slice(0, 1);
            break;
        case 2:
            string = string.slice(-1) + string.slice(0, -1);
            break;
        case 3:
            stringArray = string.split('').reverse();
            string = stringArray.join('');
    }
    console.log(string);
}

// 그놈의 쿼리 하...
// 1 > 첫 글자 제외 나머지 문자를 한 칸씩 앞으로 당기고, 첫 글자를 가장 뒤로
// 2 > 마지막 글자 제외 나머지 문자 한 칸씩 뒤로 밀고, 마지막 글자를 가장 앞으로
// 3 > 문자열 reverse