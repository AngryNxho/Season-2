// Es posible entrar en conflictos en ese caso es mejor usar arboles binarios

const objeto = {PDX:"Portland", UIO: "Quito"};

// Recorrer O(n) Cuando aumentan los elementos tambien aumentara el tiempo
for (let key in objeto) {
    console.log(key, objeto[key]);
}

// Buscar O(1)
console.log(objeto.PDX);

//Insertar O(1)
objeto["SEA"] = "Seattle";
console.log(objeto)

//Borrar O(1)
delete objeto.PDX;
console.log(objeto);

//Buscar, insertar, borrar Mejor caso O(1)
//pero caso O(n);