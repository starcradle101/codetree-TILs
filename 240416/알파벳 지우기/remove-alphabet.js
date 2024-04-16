const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [str1, str2] = input;
let [str1Result, str2Result] = ['', ''];

for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] <= 9 && str1[i] >= 0) {
        str1Result += str1[i];
    }
}

for (let i = 0; i < str2.length; i += 1) {
    if (str2[i] <= 9 && str2[i] >= 0) {
        str2Result += str2[i];
    }
}

let sum = Number(str1Result) + Number(str2Result);
console.log(sum);