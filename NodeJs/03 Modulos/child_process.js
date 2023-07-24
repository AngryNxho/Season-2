const cp = require('child_process');

cp.exec('echo hola', (error, datos) => {
    if (error) { return console.log('Error!', error); }
    console.log(`stdout: ${datos}`);
});