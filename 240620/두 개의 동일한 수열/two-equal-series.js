const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

const hasSameElements = (arr1, arr2) => {
    const sortedArr1 = arr1.sort((a,b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr1.length; i += 1) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return 'No';
        }
    }

    return 'Yes';
}

console.log(hasSameElements(arr1, arr2));