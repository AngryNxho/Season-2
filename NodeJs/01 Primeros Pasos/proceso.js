console.log(process.pid);
console.log(process.versions);
console.log(process.platform);
console.log(process.arch);

process.on('exit', () => {
    process.stdout.write('fin del proceso \n');
});


//excerise:

// Crea una función que escuche el evento 'warning' del proceso y
//  llame a un callback que tome como argumento al objeto 'warning'
//   e imprime con 'console.warn' el nombre del warning utilizando
//  notación de punto.


process.on('warning', warning => {
    console.warn(warning.name)
});