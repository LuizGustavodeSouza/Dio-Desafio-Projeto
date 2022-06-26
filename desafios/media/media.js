
let cont = 0;
let n = [34,56,44,23];

let soma = 0;

do {
    
    if(n<0){break;}
    soma = n.reduce((vAnterior, vAtual) => vAnterior + vAtual) ;
    cont =  n.length ;
    media = soma/cont; 

}while (n > 0);

console.log(media);


/* testado e ok
let cont = 0;
let n = [34,56,44,23];

let soma = 0;

do {
    if(n<0){break;}
    soma = n.reduce((vAnterior, vAtual) => vAnterior + vAtual) ;
    cont =  n.length ;
    media = soma/cont; 

}while (n > 0);

console.log("S:",soma,"M:",media,"C:" ,cont);

*/


/* testado e ok para plataforma Dio

let count = 0;
let n = 0;
let soma = 0;

do{
  n = parseInt(gets())
  if(n>0){
    count+=1
    soma+=n}
}while (n > 0);

media=soma/count
print(media.toFixed(2));


*/