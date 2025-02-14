// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. 
// La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).
// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

let a = parseInt(prompt("Ingrese el numero inicial"));
let b = parseInt(prompt("Ingrese el numero final"));
const c = [1,2,5,48,7,1,24,8,9,1,2,5];

const sumarArreglo = (a,b,c) => {
        let suma = 0;
        if (a < c.length && b > a && a > 0) 
        {
            for (let i = a; i <= b; i++)
                {
                    suma = suma + c[i];
                }
            return suma;
        }
        else
        {
            throw new Error("Los superan el limite del arreglo");
        }
}

let resultado = sumarArreglo(a,b,c);
console.log(`El resultado es ${resultado}`);
// console.log(sumarArreglo(a,b,c));

 
