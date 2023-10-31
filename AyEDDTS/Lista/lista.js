const lista = ["a", "b", "c"]; // n

//Acceso O(1)
lista[0];

//Buscar O(n)
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === "c") {
        console.log(lista[i]);
        break
    }
}

//Insertar O(n)

//Borrar O(n)