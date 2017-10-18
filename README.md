# less-var-parse


less-var-parse is a less variable parser. will parse less variables to js Object.

## Install

```bash
npm install less-var-parse -D
```

## Usage

```less
// Demo less

/**
 * Multi-line comments
 * Test
 */

// Single line comments

@black: '#000'; // inline comments

@white: '#fff';

// hr line
// -- @hr: 'description'

@red: 'red';
// @green: 'green';
```

```javascript
// Demo
const fs = require('fs');
const lessVarParse = require('less-var-parse');
const vars = lessVarParse(fs.readFileSync('/path/fileName.less', 'utf8'));
console.log(vars);
```

will output:

```json
{
  "@black": "#000",
  "@white": "#fff",
  "hr": "description",
  "@red": "red"
}
```

less-var-parse will ignore comments lines(includes Single line comments, Multi-line comments and inline comments).
But if you want use some variables to distinguish different parts of variables, you can use `// -- @key: value` to do this job, just like the demo code.

## LICENSE
[MIT](./LICENSE)
