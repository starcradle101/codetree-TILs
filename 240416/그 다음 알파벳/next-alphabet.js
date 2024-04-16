const fs = require('fs');
let string = fs.readFileSync(0).toString().trim();

if (string === 'z') {
    console.log('a');
} else {
    console.log(String.fromCharCode(string.charCodeAt() + 1));
}

// 문자를 아스키 코드로 바꾸고, 아스키 코드에서 1을 더한 값을 다시 문자로