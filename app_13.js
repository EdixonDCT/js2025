const capitalizar = (cadena) => {
  let separar = cadena.split(" ");

  for (let i = 0; i < separar.length; i++) {
    let palabra = separar[i].charAt(0).toUpperCase() + separar[i].slice(1);
    separar[i] = palabra;
  }

  return separar.join(" ");
};

let cadena = "mañana no hay clase";
console.log(capitalizar(cadena));
