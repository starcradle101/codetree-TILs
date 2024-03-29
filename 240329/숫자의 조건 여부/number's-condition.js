const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input >= 113) {
  console.log(1);
} else {
  console.log(0);
}