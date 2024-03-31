const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

for (let i = 0; i < n; i++) {
        let line = '';
        // 공백 출력
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        // 별 출력
        for (let j = 0; j < i * 2 + 1; j++) {
            if(j % 2 === 0) {
                line += '*';
            } else {
                line += ' '; // 별 사이의 공백 추가
            }
        }
        console.log(line);
    }
    
    // 아래쪽 삼각형 출력
    for (let i = n - 2; i >= 0; i--) {
        let line = '';
        // 공백 출력
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        // 별 출력
        for (let j = 0; j < i * 2 + 1; j++) {
            if(j % 2 === 0) {
                line += '*';
            } else {
                line += ' '; // 별 사이의 공백 추가
            }
        }
        console.log(line);
    }