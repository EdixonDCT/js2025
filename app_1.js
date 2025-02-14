let valor = parseInt(prompt(`Ingrese la altura para la piramide`));
const piramide = (valor) =>
{
    triangulo="";
    console.log(typeof valor);
    for (let i = valor; i >= 0; i--)
    {
        triangulo+=" "
    }
    for (let i = 1; i <= valor; i++)
    {
        triangulo+="*".repeat(i) 
    }
    console.log(triangulo);
    
}
piramide(valor)
