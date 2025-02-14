/*
01. Contraseña válida

Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/


const contrasenaValida = (llamada) => {
  validacion = llamada == "2Fj(jjbFsuj" || llamada == "eoZiugBf&g9" ? true : false;
  return validacion
};

let llamada = prompt(`INGRESE CONTRASEÑA`);
console.log(typeof llamada);
alert(contrasenaValida(llamada));





 
