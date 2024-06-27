class WeatherData {
    constructor (date = '', day = '', weather = '') {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const weatherData = input.slice(1).map(el => new WeatherData(...el.split(' ')));

let rainyDays = [];

for (let datum of weatherData) {
    if (datum.weather === 'Rain') rainyDays.push(datum);
}

let earliestRainyDay = rainyDays[0];

for (let rainyDay of rainyDays) {
    if (rainyDay.date < earliestRainyDay.date) earliestRainyDay = rainyDay;
}

console.log(`${earliestRainyDay.date} ${earliestRainyDay.day} ${earliestRainyDay.weather}`);

// 가장 근 시일 내에
// 비가 오는 날을 찾아 출력