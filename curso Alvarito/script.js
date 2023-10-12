function Empleado(legajo, nombre, apellido, fecha, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.cargo = cargo;

}



var listEmpleados = [];

function agregar() {

    let legajo = document.querySelector("#legajo").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let fecha = document.querySelector("#fechaNac").value;
    let cargo  = document.querySelector("#cargo").value;

    let nuevoEmpleado = new Empleado(legajo, nombre, apellido, fecha, cargo);

    listEmpleados.push(nuevoEmpleado);
    console.log(nuevoEmpleado);

}


function listar() {


    for(let lista of listEmpleados){
        for (emp in lista) {
            console.log(emp + ": " + lista[emp])
        }
    }

}