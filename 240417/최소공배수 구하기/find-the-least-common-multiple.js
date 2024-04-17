// 최소공배수 = A * B / 최대공약수
const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const getGCD = (n, m) => {
    let gcd = 0;
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

const getLCM = (n ,m) => {
    const gcd = getGCD(n, m);

    console.log((n *m) / gcd);
}

getLCM(n, m);