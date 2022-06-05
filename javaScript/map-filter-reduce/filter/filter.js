// retorna numeros pares e impares
const num = [1,2,3,4,8,10];

console.log("Estes numeros são pares = " + num.filter((pares) => pares % 2 === 0));
console.log("Estes numeros são impares = " + num.filter((pares) => pares % 2 !== 0));