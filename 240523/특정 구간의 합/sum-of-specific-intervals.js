const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(' ').map(Number);
let orderedPairs = input.slice(2).map(el => el.split(' ').map(Number))

function getSelectedSum() {
    for (let pair of orderedPairs) {
        let sum = 0;
        let [start, end] = pair;
        for (let i = start - 1; i < end; i += 1) {
            sum += arr[i];
        }
        console.log(sum);
    }
}

getSelectedSum();