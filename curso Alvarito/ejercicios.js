// let c = document.getElementById("contador");
// let texto = document.querySelector(".texto");

// c.addEventListener("click", () => {
//     numeroSuma.txteContent++;
// })

// document.addEventListener("keydown", (e) => {
//     console.log(e.key);
//     if (e.key == "Enter"){
//         numeroSuma.textContent++;
//     }
// })

// document.addEventListener("click", function() {
//      for (let x = 0; x < 100; x++) {
//         texto.textContent =+ x;
//      }
//      let intervalo = setTimeout(() => {
//          alert("se acabo el tiempo")
//          clearTimeout(intervalo)
//     }, 500);
// })

let nombre = ["alvaro", "nacho", "alvaro", "nacho"];

// for (let x of nombre) {
//     console.log(x)
// }

// for (let x = 0; x < nombre.length; x++) {
//     console.log(nombre[x])
// }

//Implemente la función testLoop, donde debe utilizar un Loop While
//que itere tantas veces como lo indique el parámetro vueltas y que imprima
//en la consola en cada iteración el número de vuelta de la siguiente forma:
//Vuelta 0, Vuelta 1, etc. Utilice la variable contador para ir contando
//la cantidad de vueltas que va dando el ciclo.

// function testLoop(vueltas) {
//   let c = 0;
//   while (c <= vueltas) {
//     console.log(`Vueltas ${c}`);
//     c++;
//   }

//   return "";
// }

// console.log(testLoop(10));

let persona = {
  nombre: "ignacio",
  apellido: "manriquez",
};

console.log(persona.nombre);
