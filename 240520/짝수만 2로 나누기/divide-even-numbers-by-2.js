const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

function mutateArr(_arr) {
    let answer = [];
    for (let num of _arr) {
        if (num % 2 === 0) {
            answer.push(num / 2)
        } else {
            answer.push(num)
        }
    }
    return answer.join(' ');
}

console.log(mutateArr(arr));
// 배열은 함수 인자로 넘기게 되면 주소 자체가 넘어간다!