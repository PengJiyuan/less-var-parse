module.exports = less => {
  const lines = less.split('\n');
  const vars = {};
  const reg = /^@(.*:[^;]*)/g;
  // -- @hr: 'for holder'
  const hrReg = /^\/{2}\s--\s*@(.*:[^;]*)/g;
  let matches = [];

  lines.forEach(line => {
    if(line.match(reg)) {
      matches = matches.concat(line.match(reg));
    } else if(line.match(hrReg)) {
      matches = matches.concat(line.match(hrReg));
    }
  });

  matches.forEach(m => {
    const v = m.split(' @').length > 1 ? m.split(' @')[1] : m;
    const [ key, value ] = v.split(':');
    vars[key] = value.trim();
  });

  return vars;
}
