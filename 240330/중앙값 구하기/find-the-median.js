const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
} else if ((b > c && b < a) || (b > a && b < c)) {
    console.log(b);
} else {
    console.log(c);
}

// 중앙에 오는 값 비교

// a
// a > b && a < c
// a > c && a < b

// b
// b > c && b < a
// b > a && b < c

// c
// c > a && c < b
// c > b && c < a