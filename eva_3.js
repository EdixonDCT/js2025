/* 3.Diseñar un programa que me solicite por teclado n cantidad de números, al finalizar
la carga de los números el programa debe enviar los números a una función
expresada como único parámetro rest donde serán ordenados de mayor a menor
para luego mostrarlos en una tabla por consola.*/

const mayor = (...numeros) =>
{
    let mayorMenor = [];
  while (numeros.length != 0)
  {
    let alto = 0;
    let temporal = 0;
    for (let x = 0; x < numeros.length; x++)
    {
      if (numeros[x] > alto)
      {
        alto = numeros[x];
        temporal = x
      }
    }
    numeros.splice(temporal, 1);
    mayorMenor.push(alto);
  }
  console.log(mayorMenor);
}
let numeros = [];
let cantidad = parseInt(prompt(`Ingrese la cantidad de Numeros que ingresara`));
for (let x = 0; x < cantidad; x++)
{
  numeros[x] = parseInt(prompt(`Ingrese el Numero #${x + 1}`));
}
mayor(...numeros);
