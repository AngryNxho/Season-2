const fs = require('fs');

//sync

const ls = fs.readdirSync(__dirname);
console.log(ls);

// async
fs.readdir(__dirname, (err, ls) => {
    console.log(ls);
});