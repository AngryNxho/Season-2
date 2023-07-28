process.stdout.write('Como te llamas?\n');
process.stdin.on('data',data => {
    let respuesta = String(data).trim();
    if (respuesta === 'no'){
        process.exit();
    }
    process.stdout.write(`hola ${respuesta}! Deseas continuar? \n`);
});


