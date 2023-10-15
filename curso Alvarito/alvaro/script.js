const selectElement = document.querySelector(".opcion");
let button = document.querySelector("#buscar");


opcion.addEventListener("change", () => {
    let elegido = (opcion.value);

    alert(`El archivo de base ahora es ${elegido}`)
})


button.addEventListener('click', busqueda)


function busqueda(){
    let select = document.getElementById('opcion').value;

    fetch(`${select}.json`)
    .then(res => res.json())
    .then((data) => {

        const lista = document.getElementById('lista');
        let input = document.getElementById('frase').value;

        for (let i = 0; i < data.data.length; i++){
            const pelicula = data.data[i]
            if(input.toUpperCase() == pelicula.nombre){
                const elementLi = document.createElement('li');
                elementLi.textContent = pelicula.nombre;
                lista.appendChild(elementLi);
                break;
            }else{
                const elementLi = document.createElement('li');
                elementLi.textContent = "Busqueda no encontrada";
                lista.appendChild(elementLi);
            }

        };


    })




}