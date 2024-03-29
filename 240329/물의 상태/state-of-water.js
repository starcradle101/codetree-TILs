const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input >= 100) {
  console.log('vapor');
} else if (input < 0) {
  console.log('ice');
} else {
  console.log('water');
}