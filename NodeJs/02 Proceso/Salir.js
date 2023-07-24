let i = 0;
setInterval(() => {
   i += 10;
   console.log(`cargando... ${i}%`); 
}, 200);


process.on('exit', () => {
    console.log('Find del proceso');
});