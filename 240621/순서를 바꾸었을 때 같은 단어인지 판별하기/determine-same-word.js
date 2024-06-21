const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [arr1, arr2] = input.map(el => el.split(''));

const isAnangram = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return 'No';
    }

    const sortedArr1 = arr1.sort();
    const sortedArr2 = arr2.sort();

    for (let i = 0; i < sortedArr1.length; i += 1) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return 'No';
        }
    }

    return 'Yes';
}

console.log(isAnangram(arr1, arr2));