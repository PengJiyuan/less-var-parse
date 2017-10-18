const fs = require('fs');
const lessVarParse = require('..');

const vars = lessVarParse(fs.readFileSync('./index.less', 'utf8'));

Object.keys(vars).forEach(v => console.log(`${v}: `, vars[v]));
