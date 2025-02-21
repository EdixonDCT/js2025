/*1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
registra el operador, para ello debemos tener en cuenta que las diferentes
tarjetas tienen diferentes nomenclaturas:
* American Express: 15 dígitos y empieza por (34 – 37)
* Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
* Discover: tiene 16 dígitos y empieza por (6011)
* Mastercard: tiene 16 dígitos y empieza por (51 – 55)
* Visa: tiene: 16 dígitos y empieza por (4)
El programa solo se debe permitir el ingreso de enteros positivos y máximo
16 caracteres, si el operador ingresa un carácter no permitido se debe
mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
de crédito.
Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
crédito.*/

export const banco = () => {
  let regexNega = /^-\d+$/;
  let tarj;
  let cont = 0;

  while (cont === 0) {
    tarj = prompt("Ingrese el número de la tarjeta:");
    if (regexNega.test(tarj)) {
      console.log("Ingrese un número positivo.");
    } else if (/^[0-9]{1,16}$/.test(tarj)) {
      if (/^3[47]\d{13}$/.test(tarj)) {
        cont++;
        return "VALIDACIÓN: Tarjeta American Express";
      } else if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(tarj)) {
        cont++;
        return "VALIDACIÓN: Tarjeta Diners Club";
      } else if (/^6011\d{12}$/.test(tarj)) {
        cont++;
        return "VALIDACIÓN: Tarjeta Discover";
      } else if (/^5[1-5]\d{14}$/.test(tarj)) {
        cont++;
        return "VALIDACIÓN: Tarjeta Mastercard";
      } else if (/^4\d{15}$/.test(tarj)) {
        cont++;
        return "VALIDACIÓN: Tarjeta Visa";
      } else {
        console.log("La tarjeta es inválida.");
        cont++;
      }
    } else {
      console.log("Ingrese un dato numerico positivo menor de 16 digitos");
    }
  }
};
/*
Prueba con los siguientes números de tarjeta:
- American Express: 371449635398431
- Diners Club: 30569309025904
- Discover: 6011111111111117
- Mastercard: 5555555555554444
- Visa: 4111111111111111
*/
