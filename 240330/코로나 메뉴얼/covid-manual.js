const fs = require('fs');
let input = (fs.readFileSync(0).toString().split('\n'));

let person1 = input[0].split(' ');
let person1Temp = Number(person1[1]);
let person1Symp = person1[0];
let person2 = input[1].split(' ');
let person2Temp = Number(person2[1]);
let person2Symp = person2[0];
let person3 = input[2].split(' ');
let person3Temp = Number(person3[1]);
let person3Symp = person3[0];

let emergencyCount = 0;

if (person1Temp >= 37 && person1Symp === 'Y') {
    emergencyCount += 1;    
}

if (person2Temp >= 37 && person2Symp === 'Y') {
    emergencyCount += 1;
}

if (person3Temp >= 37 && person3Symp === 'Y') {
    emergencyCount += 1;
}

console.log((emergencyCount >= 2) ? 'E' : 'N');