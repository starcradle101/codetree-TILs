const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let word = input[0].split('');
let wordLength = word.length;
let indexes = input.slice(1).map(Number);

    for(let index of indexes) {
        if (wordLength < 1) break;
        if (index >= wordLength) {
            word.splice(wordLength - 1, 1);
        } else {
            word.splice(index, 1);
        }
        wordLength = word.length;
        let result = word.join('');
        console.log(result);
    }


// 입력에 따른 문자열 제거작업
// 정수에 해당하는 위치의 문자 제거 (idx)
// 문자가 한개 남으면 종료 (while)
// 정수가 문자열의 길이 이상일 경우 마지막 문자 제거