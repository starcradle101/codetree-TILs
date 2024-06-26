const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

class Secret {
    constructor (code, point, time) {
        this.code = code;
        this.point = point;
        this.time = time;
    }
}

const answer = new Secret(...input);

console.log(`secret code : ${answer.code}`);
console.log(`meeting point : ${answer.point}`);
console.log(`time : ${answer.time}`);


// 클래스
// constructor => 생성자

// class Student {
//     constructor(kor, eng, math) {
//         this.kor = kor;
//         this.eng = eng;
//         this.math = math;
//     }
// }
// constructor의 인자로 넘어오는 것은 멤버 변수(kor, eng, math)

// 클래스를 사용해서 객체(instance)를 만들 수 있다
//