const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function lcmOfArray(arr, n) {
    if (n === 1) {
        return arr[0];
    } else {
        return lcm(arr[n - 1], lcmOfArray(arr, n - 1));
    }
}

function findLCM(arr) {
    const n = arr.length;
    return lcmOfArray(arr, n);
}

const result = findLCM(arr);
console.log(result);