class Coordinate {
    constructor(x = 0, y = 0, number = 0) {
        this.x = x;
        this.y = y;
        this.distance = Math.abs(0 - this.x) + Math.abs(0 - this.y);
        this.number = number;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let coordinates = [];

for (let i = 1; i < input.length; i += 1) {
    const [x, y] = input[i].split(' ').map(Number);
    coordinates.push(new Coordinate(x, y, i));
}

function cmp(a, b) {
    if(a.distance === b.distance) {
        return a.number - b.number;
    }

    return a.distance - b.distance;
}

coordinates.sort(cmp);
coordinates.forEach(el => console.log(el.number))