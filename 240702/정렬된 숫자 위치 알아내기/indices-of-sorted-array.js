class Element {
    constructor(value, index, indexAfterSort = 0) {
        this.value = value;
        this.index = index;
        this.indexAfterSort = indexAfterSort;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const inputSequence = input[1].split(' ').map(Number);
const sequence = [];

for (let i = 0; i < inputSequence.length; i += 1) {
    sequence.push(new Element(inputSequence[i], i + 1));
}

const cmp = (a, b) => {
    if (a.value === b.value) {
        return a.index - b.index;
    }
    return a.value - b.value;
}

sequence.sort(cmp);

for (let i = 0; i < sequence.length; i += 1) {
    sequence[i].indexAfterSort = i + 1;
}

const answer = sequence.sort((a, b) => a.index - b.index).map(el => el.indexAfterSort);
console.log(answer.join(' '));