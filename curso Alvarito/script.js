let c = document.getElementById("contador");
let numeroSuma = document.querySelector(".sum");

// c.addEventListener("click", () => {
//     numeroSuma.textContent++;
// })

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "Enter"){
        numeroSuma.textContent++;
    }
})