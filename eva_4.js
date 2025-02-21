/* 4.Diseñar un programa que me permita ingresar n cantidad de palabras por teclado, al
finalizar la carga, se debe enviar como a una función expresada como único
parámetro rest donde nos responderá cuál de las palabras ingresadas es mayor a
todas las anteriores.*/

const AbecedarioMayor = (...letras) =>
{
  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ñ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  let alto = 28;
  let altoLetra = "";
  let temporal = 0;
  let MayorMenor = [];
  while (letras.length != 0)
  {
    for (let x = 0; x < letras.length; x++)
    {
      let letraPartida = letras[x][0]; //cojer primera letra
      for (let y = 0; y < abc.length; y++)
      {
        if (abc[y] == letraPartida) //comparar para hallar el numero de la letra en el alfabeto
        { 
          if (y < alto)
          {
            alto = [y];
            temporal = x;
          }
        }
      }
    }
    MayorMenor.push(letras[temporal]);
    letras.splice(temporal, 1);
  }
  console.log(MayorMenor); 
};
let letras = [];
let cantidad = parseInt(prompt(`Ingrese la cantidad de Letras que ingresara`));
for (let x = 0; x < cantidad; x++) {
  letras[x] = (prompt(`Ingrese el Letras #${x + 1}`)).toLocaleLowerCase();
}
AbecedarioMayor(...letras);
