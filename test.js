const selectElement = document.querySelector(".opcion");
let button = document.querySelector("#buscar");
var tipo;
const pelicula = 'peliculas';
const serie = 'series';


selectElement.addEventListener("change", cambiar)
 
function cambiar(event) {
    if(event.target.value == pelicula) {
        tipo = 'peliculas'
    }else{
        if(event.target.value == serie) {
            tipo = 'series'
        }
    }
    return tipo;
}





button.addEventListener('click', busqueda)


function busqueda(){

    fetch('peliculas.json')
    .then(res => res.json())
    .then((data) => {

        const lista = document.getElementById('lista');


        data.data.forEach(pelicula => {

            const elementLi = document.createElement('li');
            elementLi.textContent = pelicula.nombre;

            lista.appendChild(elementLi);

            console.log(pelicula.nombre);

        });


    })




}