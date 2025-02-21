/*5.Diseñar un módulo llamado calculadora, en este módulo debe exportar una clase
con los siguientes métodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se presenten
errores, si al momento de su ejecución se presenta algún error, el sistema debe
enviar un mensaje personalizado indicando el tipo de error para que el usuario lo
solucione y continue realizando los cálculos básicos de las matemáticas.
*/

class Calculadora {
  Sumar() {
    let cont = 0;
    let Positivo = /^\d+$/;
    let Negativos = /^-\d+$/;
    while (cont == 0) {
      let num1 = parseInt(prompt("Ingrese el primer numero para sumar"));
      let num2 = parseInt(prompt("Ingrese el segundo numero para sumar"));
      if (
        (Positivo.test(num1) || Negativos.test(num1)) &&
        (Positivo.test(num2) || Negativos.test(num2))
      ) {
        let sumador = num1 + num2;
        alert(`${num1}+${num2}=${sumador}`);
        cont++;
      } else throw new Error("Solo se puede ingresar Numeros");
    }
  }
  Resta() {
    let cont = 0;
    let Positivo = /^\d+$/;
    let Negativos = /^-\d+$/;
    while (cont == 0) {
      let num1 = parseInt(prompt("Ingrese el primer numero para resta"));
      let num2 = parseInt(prompt("Ingrese el segundo numero para resta"));
      if (
        (Positivo.test(num1) || Negativos.test(num1)) &&
        (Positivo.test(num2) || Negativos.test(num2))
      ) {
        let sumador = num1 - num2;
        alert(`${num1}-${num2}=${sumador}`);
        cont++;
      } else throw new Error("Solo se puede ingresar Numeros");
    }
  }
  Multiplicacion() {
    let cont = 0;
    let Positivo = /^\d+$/;
    let Negativos = /^-\d+$/;
    while (cont == 0) {
      let num1 = parseInt(prompt("Ingrese el primer numero para multiplicar"));
      let num2 = parseInt(prompt("Ingrese el segundo numero para multiplicar"));
      if (
        (Positivo.test(num1) || Negativos.test(num1)) &&
        (Positivo.test(num2) || Negativos.test(num2))
      ) {
        let sumador = num1 * num2;
        alert(`${num1}x${num2}=${sumador}`);
        cont++;
      } else throw new Error("Solo se puede ingresar Numeros");
    }
  }
  Division() {
    let cont = 0;
    let Positivo = /^\d+$/;
    let Negativos = /^-\d+$/;
    while (cont == 0) {
      let num1 = parseInt(prompt("Ingrese el primer numero para dividir"));
      let num2 = parseInt(prompt("Ingrese el segundo numero para dividir"));
      if (
        (Positivo.test(num1) || Negativos.test(num1)) &&
        (Positivo.test(num2) || Negativos.test(num2))
      ) {
        let sumador = num1 / num2;
        alert(`${num1}÷${num2}=${sumador}`);
        cont++;
      } else throw new Error("Solo se puede ingresar Numeros");
    }
  }
}

const calcu = new Calculadora();
let cont = 0;
  while (cont == 0)
  {
    opcion = prompt(`--Calculadora--
    a. Suma
    b. Resta
    c. Multiplicación
    d. División
    e. Salir
    Ingrese una de las opciones anteriores`);
    switch (opcion) {
      case "a":
        calcu.Sumar();
        break;
      case "b":
        calcu.Resta();
        break;
      case "c":
        calcu.Multiplicacion();
        break;
      case "d":
        calcu.Division();
        break;
      case "e":
        cont++;
        break;
      default:
        alert("Dato invalido ingrese uno de los anteriormente mencionados");
    }
  }