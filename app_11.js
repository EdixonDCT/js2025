/*
15. Transcribir ADN a ARN


Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
Los complementos son los siguientes:
G -> C
C -> G
T -> A
A -> U
*/
const transcribir = (ARN) =>
{
  console.log(ARN);
  ARN = ARN.split("");
  for (let x = 0; x < ARN.length; x++)
  {
    if (ARN[x] == "G") ARN[x] = "C";
    else if (ARN[x] == "C") ARN[x] = "G";
    else if (ARN[x] == "T") ARN[x] = "A";
    else if (ARN[x] == "A") ARN[x] = "U";
    else ARN[x] == "X";
  }
  ARN = ARN.join("")
  return ARN
};

let ADN = "GCTAGCTA";
console.log(transcribir(ADN));
