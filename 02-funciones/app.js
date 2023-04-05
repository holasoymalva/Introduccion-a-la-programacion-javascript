let numero = 4;
let el_cuadrado_5 = numero * numero;

// Funcion tradicional
function el_cuadrado(num) {
  return num * num;
}

// Expresion Funcion
const cuadrado = function (num) {
  return num * num;
};

let numeros = [1, 4, 5, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  const num_actual = numeros[i];
  console.log(cuadrado(num_actual));
}

// Factorial de un numero

function factorial(num) {
  console.log("-----------------------");
  console.log(num);
  // if (num < 2) {
  //     return 1;
  // }else{
  //     return num * factorial(num-1);
  // }
  // Operador ternario
  // condicional ? seCumple : noSeCumple;
  return num < 2 ? 1 : num * factorial(num - 1);
}

const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1);
};
console.log(factorial(5));

let frutas = ["fresa", "manzana", "banana"];
let demo = frutas.map((fruta) => {
  console.log(fruta, fruta.length);
});
demo;

let nums = [2, 5, 7, 9];
const fac = (num) => {
  return num < 2 ? 1 : num * fac(num - 1);
};
demo = nums.map(fac);
console.log(demo);

// --------------------------------------

// El problema que vamos a resolver es el siguiente: 
// dado un arreglo de números, encontrar todos los pares 
// de números que sumen un número específico. Por ejemplo, 
// si tenemos el arreglo [1, 2, 3, 4, 5] y queremos encontrar 
// todos los pares que sumen 7, la respuesta sería [(2, 5), (3, 4)].

// Entradas de datos
let arreglo = [1, 2, 3, 4, 5];
let num_objetivo = 6;

function pares_d_nums(arr, target){
    let result = [];
    let left = 0;
    let right = arr.length -1;

    while(left< right){
        const sum = arr[left]+arr[right];
        if(sum === target){
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        }else if(sum< target){
            left++;
        }else{
            right--;
        }
    }
    return result;
}
resultado = pares_d_nums(arreglo,num_objetivo);
console.log(resultado);


// 

// function factorial_num(num) {
//     let resultado = 1;
//     for (let i = 2; i <= num; i++) {
//         resultado*=i;
//     }
//     return resultado;
// }
// console.log(factorial_num(5));
// const factorial_num = function(num){
//     return num < 2 ? 1 : num * factorial_num(num-1);
// }

let nums_fac = [1,2,3,4,5];

const factorial_num = (num) => {
    return num < 2 ? 1 : num * factorial_num(num-1);
}

let demo_fac = nums_fac.map(factorial_num);
console.log(demo_fac);