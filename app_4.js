/*
04. Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
*/

let arreglo = [1,2,3,4,5,6,7,8,9,10]

const imprimirArreglo = arreglo => 
{
    for(let x = 0;x < arreglo.length;x++)
    {
        console.log(`${arreglo[x]}`);
    }
}

let resultado = imprimirArreglo(arreglo);
 
