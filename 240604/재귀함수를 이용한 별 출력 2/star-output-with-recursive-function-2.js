const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const printStars = (n) => {
    if (n < 1) {
        return
    }
    
    for (let i = n; i >= 1; i-=1) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
    printStars(n - 1)
    for (let i = 0; i < n; i+=1) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
    
}

printStars(input)



// 재귀함수를 하나만 써서 순 - 역순으로 출력하기

// N - 1 부터 1 - N 까지