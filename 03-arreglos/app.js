
// Ciclo for de tipo C

for (let index = 0; index < frutas.length; index++) {
    const fruta = frutas[index];
    if (fruta.length === 5) {
        console.log("Esta fruta tiene long. de 5:", fruta);
    }
}

for (let index = 0; index < frutas.length; index++) {
    const fruta = frutas[index];
    console.log(fruta, index);
}


//            [ 0 ,  1,   2 ]

// const < let < var 
// const frutas = ["fresa","manzana","banana","kiwi","palta"];

console.log(frutas);
console.log(frutas[frutas.length-1]);
console.log(frutas.length);

frutas.push("Kiwi");
frutas.push("Naranja"); // Add elemento al final
frutas.pop(); // Eliminar el ultimo elemento

frutas.unshift("Naranja"); // Add elemento al inicio
frutas.shift(); // Eliminar el primer elemento

let posicion = 2;
let numElementos = 2;

frutas.splice(posicion,numElementos)

console.log(frutas[0]);

frutas.forEach(
    function(fruta,indice, array){
        console.log(fruta,indice);
    }
)


// Entrevista laboral con arreglos

// Dado un arreglo de números, escribe
// una función que devuelva el segundo 
// número más grande del arreglo.

// Por ejemplo, si el arreglo 
// es [2, 5, 7, 9, 3],
//  la función debería devolver 7.

// input

let nums = [];

function SegNumMasGrande(arr){
    
    if (arr.length<1 || arr === []){
        return arr
    }

    let maximo = arr[0];
    let segundoMaximo = arr[0];
    let i;
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] > maximo) {
            segundoMaximo = maximo;
            maximo = arr[i];
        } else if (arr[i]> segundoMaximo && arr[i] !=maximo) {
            segundoMaximo = arr[i];
        }
    }
    return segundoMaximo;
}

let resultado = SegNumMasGrande(nums);
console.log(resultado);
