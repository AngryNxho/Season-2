console.log(process.pid);
console.log(process.versions);
console.log(process.platform);



process.on('exit', () => {
  process.stdout.write("fin del proceso. \n");
});