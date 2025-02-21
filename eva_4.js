/* 4.Diseñar un programa que me permita ingresar n cantidad de palabras por teclado, al
finalizar la carga, se debe enviar como a una función expresada como único
parámetro rest donde nos responderá cuál de las palabras ingresadas es mayor a
todas las anteriores.*/

const AbecedarioMayor = (...letras) =>
{
  console.log(letras);
};
let letras = [];
let cantidad = parseInt(prompt(`Ingrese la cantidad de Letras que ingresara`));
for (let x = 0; x < cantidad; x++) {
  letras[x] = prompt(`Ingrese el Letras #${x + 1}`);
}
AbecedarioMayor(...letras);
