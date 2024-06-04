const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const printSerial = (n) => {
    if (n < 1) {
        return
    }
    
    process.stdout.write(`${n} `);
    printSerial(n - 1)
    process.stdout.write(`${n} `);
}

printSerial(input)



// 재귀함수를 하나만 써서 순 - 역순으로 출력하기

// N - 1 부터 1 - N 까지