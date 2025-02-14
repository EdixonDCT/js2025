/*
13. Remover ceros

Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
*/

const removerCeros = (arreglo) => {
  resultado = arreglo.filter(numero => numero != 0);
  return resultado;
};

let arreglo = [0,0,0,0,10,20,30,0,50,100,0];
alert(removerCeros(arreglo));
