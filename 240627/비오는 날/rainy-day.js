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

for (let datum of weatherData) {
    if (datum.weather === 'Rain') {
        console.log(`${datum.date} ${datum.day} ${datum.weather}`);
        break;
    }
}