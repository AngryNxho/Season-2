const fs = require("fs");

fs.rename("./texto.txt", "./texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Renombrado!");
});
console.log("Renombrando...");




const fs = require("fs");

fs.rename("./texto-de-js.js", "./nuevo/texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Movido!");
});
console.log("Moviendo...");










