function bisiesto(año, muerte){
    let cBisiestos = 0;
    actualYear = new Date;

    if (muerte == 0){
        muerte = actualYear.getFullYear();
    }



    for (x = año; x <= muerte; x++){
        if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0){
            cBisiestos += 1;
        }
    }

    return cBisiestos;
}


// año bisiesto: un dia cada 4 años, cualquier año divisible por 4 es bisiesto
// La regla nose aplica a los años de siglo
// siglos solo tienen año bisiesto si son divisibles entre 400

console.log(bisiesto(1980, 0))
console.log(bisiesto(1899, 1905))


