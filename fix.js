const fs = require('fs');
let re = /"\//gi;
const re2 =  /'\//gi;
const content = fs.readFileSync(`${__dirname}/docs/index.html`).toString().replace(re, `"`).replace(re2, `'`)
fs.writeFileSync(`${__dirname}/docs/index.html`, content)