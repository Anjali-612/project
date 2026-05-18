const fs = require('fs');
const k = JSON.parse(fs.readFileSync('trans_keys.json', 'utf8'));
k.sort().forEach((x, i) => console.log((i + 1) + ': ' + JSON.stringify(x)));
