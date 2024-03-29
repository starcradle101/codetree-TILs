// 중간 90점 이상 장학금
// 기말 100점만점 95점 이상 10
// 90점 이상 5
//그 미만은 못 받아요


const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let midScore = Number(input[0])
let finalScore = Number(input[1])

if (midScore < 90 || midScore >= 90 && finalScore < 90) {
    console.log(0);
} else if (midScore >= 90 && finalScore >= 95) {
    console.log(100000);
} else if (midScore >= 90 && finalScore >= 90) {
    console.log(50000)
}

// 그렇다면 10만원 = 중간 90점 이상 && 기말 95점 이상
// 5만원 = 중간 90점 이상 && 기말 90점 이상
// 그 미만은 0원