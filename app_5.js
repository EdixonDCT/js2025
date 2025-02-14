/*
06. FizzBuzz

Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
*/

const FizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0)
  {
    console.log("FizzBuzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log("WOM");
  }
};

let numero = parseInt(prompt(`Ingrese un numero`));
FizzBuzz(numero);