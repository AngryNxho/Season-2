function Empleado(legajo, nombre, apellido, fecha, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.cargo = cargo;

}


let newEmployee = new Empleado("CARGO", "nacho", "manriquez", "28-08-2001", "informatica")


for (let x in newEmployee) {
    console.log(x);
}