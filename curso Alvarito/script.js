


let opcion = document.querySelector(".opcion");
let input = document.querySelector(".input");
opcion.addEventListener("change", () => {
    let elegido = (opcion.value);

    alert(`El archivo de base ahora es ${elegido}`)
}) 
let save = [];

function abecedario () {
    for (let c= 97; c <= 122 ; c++){
        abc.push(String.fromCharCode(c))
    }

    return abc;
}

input.addEventListener("keydown", (e) => {
    console.log(abecedario());

})