/* 2.Diseñar un programa que me solicite ingresar n cantidad de números por teclado,
luego de ingresar los números el programa me debe solicitar que operación deseo
realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números <pares></pares>*/

const sumar = (numeros) =>
{
  let suma=0;
  for (let x = 0; x < numeros.length; x++)
  {
    suma = suma + numeros[x]; 
  }
  return suma;
}
const primos = (numeros) =>
{
  let Cantprimos = 0;
  for (let x = 0; x < numeros.length; x++)
  {
  let Contprimos = 0;
    for (let y = 0; y < numeros[x]; y++)
    {
      if (numeros[x] % y === 0) Contprimos++;
    }
    if (Contprimos <= 2) Cantprimos++;
  }
  return Cantprimos;
}
const pares = (numeros) => {
  let pares = 0;
  for (let x = 0; x < numeros.length; x++) {
    if (numeros[x] % 2 == 0) pares++;
  }
  return pares;
};
const Promedioprimos = (numeros) => {
  let Cantprimos = 0;
  for (let x = 0; x < numeros.length; x++) {
    let Contprimos = 0;
    for (let y = 0; y < numeros[x]; y++) {
      if (numeros[x] % y === 0) Contprimos++;
    }
    if (Contprimos <= 2) Cantprimos+=numeros[x];
  }
  Cantprimos = Cantprimos / numeros.length;
  return Cantprimos;
};
const PromedioPares = (numeros) => {
  let pares = 0;
  for (let x = 0; x < numeros.length; x++) {
    if (numeros[x] % 2 == 0) pares+=numeros[x];
  }
  pares = pares / numeros.length;
  return pares;
};



const operaciones = (cantidad) =>
{
  let cont = 0;
  let numeros = []
  for (let x = 0; x < cantidad; x++)
  {
    numeros[x] = parseInt(prompt(`Ingrese numero #${x+1}`));
  }
  console.log(numeros);
  while (cont == 0)
  {
    let opcion = prompt(`--Operaciones--
    a. Sumar los números
    b. Contar los números primos
    c. Contar los números pares
    d. Calcular el promedio de los números primos
    e. Calcular el promedio de números <pares></pares>*/
    f. Salir
    Ingrese una de las opciones anteriores`);
    opcion = opcion.toLowerCase();
    switch (opcion) {
      case "a":
        alert(`La Suma de todos los numeros es ${sumar(numeros)}`)
        break;
      case "b":
        alert(`La cantidad de numeros Primos es ${primos(numeros)}`);
        break;
      case "c":
        alert(`La cantidad de numeros Pares es ${pares(numeros)}`);
        break;
      case "d":
        alert(
          `El promedio de los numeros Primos es de ${Promedioprimos(numeros)}`
        );
        break;
      case "e":
        alert(
          `El promedio de los numeros Pares es de ${PromedioPares(numeros)}`
        );
        break;
      case "f":
        alert("Gracias por usar nuestro Programa");
        cont++;
        break;
      default:
        alert("Dato invalido ingrese uno de los anterioresmente mencionados");
    }
  }
}
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a ingresar"));
operaciones(cantidad);
