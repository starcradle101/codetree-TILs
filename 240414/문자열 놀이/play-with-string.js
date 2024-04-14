const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [string, query] = input[0].split(' ');
query = Number(query);

let queries = input.slice(1);

for (let query of queries) {
    let [queryType, param1, param2] = query.split(' ');
    switch(queryType) {
    case '1':
        let strArr = string.split('');
        [strArr[param1 - 1], strArr[param2 - 1]] = [strArr[param2 - 1], strArr[param1 - 1]];
        string = strArr.join('');
        console.log(string);
        break;
    
    case '2':
        let strArr2 = string.split('');
        for (let i = 0; i < strArr2.length; i += 1) {
            if (strArr2[i] === param1) {
                strArr2[i] = param2;
            }
        }
        string = strArr2.join('');
        console.log(string);
}
}
// 1 a b -> a번째 문자와 b 번째 문자를 교환한 뒤 출력
// 2 a b -> a를 전부 b로 변경한 뒤 출력