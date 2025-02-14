/*
02. Calcular impuestos

Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
*/


const calcularImpuestos = (edad,ingre) => {
  validacion = edad >= 18 && ingre >= 1000 ? `Sus ingresos actuales son del ${ingre*0.4}$ aplicando 40%` : `Sus ingresos son 0$`;
  return validacion;
};

let edad = parseInt(prompt("Ingrese la edad"));
let ingresos = parseFloat(prompt("Ingrese los ingresos"));
alert(calcularImpuestos(edad, ingresos));
