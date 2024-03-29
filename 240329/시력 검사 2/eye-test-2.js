const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input >= 1.0) {
  console.log('high');
} else if (input >= 0.5) {
  console.log('Middle');
} else {
  console.log('Low')
}