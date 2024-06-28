class Score {
    constructor(name = '', kor = 0, eng = 0, math = 0) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const num = Number(input[0]);
let scores = [];

const cmp = (a, b) => {
    if (a.kor === b.kor) {
        if (a.eng === b.eng) return b.math - a.math;
        return b.eng - a.eng;
    }
    return b.kor - a.kor
}

for (let i = 1; i <= num; i += 1) {
    let [name, kor, eng, math] = input[i].split(' ');
    scores.push(new Score(name, Number(kor), Number(eng), Number(math)));
}

scores.sort(cmp);

scores.forEach(el => console.log(`${el.name} ${el.kor} ${el.eng} ${el.math}`))


// cmp function이 길어진다면 밖에서 작성하자!
// 국어, 영어, 수학 순서대로 우선순위로 하여, 내림차순
// 국어가 같다면? 영어 비교
// 영어가 같다면? 수학 비교