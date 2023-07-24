const { basename, dirname, format, join } = require('path');

console.log(basename(__filename));
console.log(dirname(__filename));
console.log(format({
    root: '/',
    name: 'archivo',
    ext: '.txt'
}));
console.log(join(__dirname, 'carpeta', 'archivo.js'));