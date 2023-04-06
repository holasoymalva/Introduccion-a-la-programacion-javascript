// Definición y creación de objetos en JavaScript

// var frutas = [['fresa',2],["manzana",12],["kiwi",20]];
// console.log(frutas[0]);
// let fruta1 = frutas[0];
// console.log("La fruta: ",fruta1[0]);
// console.log("Tiene un presio de: ",fruta1[1]);

// const fruta2 ={
//     nombre: 'fresa',
//     presio: 2,
//     caducidad: "12-02"
// }

// const fruta1 = {}
// fruta1.nombre = 'banana';
// fruta1.tipo = 'miniatura';
// fruta1.presio = 5;
// fruta1["caducidad"]="25-01";

// // Este es un arreglo de objetos
// let frutas1 = [fruta1, fruta2];
// console.log(frutas1[0].nombre);

// Este es un objeto de objetos
// let frutas2 = {fruta1, fruta2};
// console.log(frutas2.fruta1.nombre);


// const fruta3 ={
//     nombre: 'fresa',
//     precio: 2,
//     caducidad: "12-02",
//     madurar : function(){ return "La fruta esta madura";},
//     info : function(){ return `${this.nombre}, ${this.precio}, ${this.caducidad}`;}
// }

// console.log(fruta3.info());
// fruta3.nombre = "kiwi";
// console.log(fruta3.info());
// delete fruta3.caducidad;
// console.log(fruta3.info());


// let num2 = 2;
// console.log(num2);
// console.log(1 + num2.toString());

// console.log('1'+'2'+'3'+'4');
// console.log(1+2+3+4);
// console.log(1*2+'3'+4/2);

// Ejercicio de programacion 

// Supongamos que estamos creando un programa 
// para gestionar una tienda en línea. 
// Necesitamos un objeto llamado Producto 
// que tenga las siguientes propiedades:

// id (número entero): un identificador único para el producto.
// nombre (cadena de texto): el nombre del producto.
// descripcion (cadena de texto): una breve descripción del producto.
// precio (número decimal): el precio del producto.
// disponible (booleano): indica si el producto está disponible para la venta.

// Output : Product
const Producto = {}

function mostrarProducto(producto) {
    console.log(producto);
    return producto
}

const miInventario = [];

function mostrarInventario(inventario){
    console.log(inventario);
    return inventario
}
function addInventario(inventario, producto){
    inventario.push(producto)
    return inventario
}

const miProducto = {
    id:1,
    nombre: 'banana',
    descripcion:'La que te gusta',
    precio: 19.99,
    disponible: true
}

mostrarProducto(miProducto);
addInventario(miInventario,miProducto);
mostrarInventario(miInventario)