/*
12. Multiplicar arreglo

Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

const multiplicarArreglo = (arreglo) => {
  multiplicar = 1;
  for (let x = 0; x < arreglo.length; x++)
  {
    multiplicar = multiplicar * arreglo[x]; 
  }
  return multiplicar
};

let arreglo = [];
let num = parseInt(prompt(`¿Cuantos datos desea ingresar?`));
let numeros = 0;
for (let x= 1; x <= num; x++) {
  numeros = parseInt(prompt(`Ingrese el numero #${x}`));
  arreglo.push(numeros);
}

alert(`El resultado de la multiplicacion del arreglo es ${multiplicarArreglo(arreglo)}`);

 
