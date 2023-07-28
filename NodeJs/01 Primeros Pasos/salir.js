//create variable i = 0
let i = 0;

// we use the function setInterval to display the code in a specific amount of time
// this interval will call the callback every 200ms
const id = setInterval(() => {
  i += 10;
  //in next iteration it clear the last line
  process.stdout.clearLine();

  //cursor return to the index 0
  process.stdout.cursorTo(0);

  // we use print it with process.stdout.write because console.log automatically add a line jump
  process.stdout.write(`cargando...${i}%`);
  //once it has reached 100 the we will clear the interval causing the program to stop
  if (i === 100) {
    clearInterval(id);
  }
}, 200);

//this function calls the callback that when the program ends, it will
//display the console.log message
process.on("exit", () => {
  console.log("\nfin del proceso");
});


