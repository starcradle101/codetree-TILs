class AddressInfo {
    constructor (name = '', addressNumber = '', city = '') {
        this.name = name;
        this.addressNumber = addressNumber;
        this.city = city;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const addressInfos = input.slice(1).map(el => new AddressInfo(...el.split(' ')));

let lastPerson = addressInfos[0];

for (let addressInfo of addressInfos) {
    if (addressInfo.name > lastPerson.name) lastPerson = addressInfo;
}

console.log(`name ${lastPerson.name}\naddr ${lastPerson.addressNumber}\ncity ${lastPerson.city}`);