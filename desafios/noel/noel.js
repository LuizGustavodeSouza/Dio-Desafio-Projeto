let N = parseInt(4);
let i = 0;
var frase = "Ho";

var somaString ="";

for (N<=5;;) {
  if (N <= i && N<=106) break;
   somaString = somaString += frase +" ";

  i++;
}

console.log(somaString.slice(0,-1)+'!'); //Metodo slice(a esquerda, a direita) remove caracter 