/*

9. Número de aes (letra "a")



Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

*/

const numeroDeAes = (a) => {
  let regex = /a/g;
  console.log((a.match(regex)).length);
};

let texto = prompt("Ingrese cualquier cosa en texto");
numeroDeAes(texto);
