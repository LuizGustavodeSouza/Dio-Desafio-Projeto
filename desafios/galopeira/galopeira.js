
let palavra = ['3','galopeira','galopeeeeeeeeeeeeeeeeeira','galopeeira'];              

    C = palavra.length;
    T =  ["","","",""]
    for ( i = 0; i < C; i++) {
      
        T[i] = palavra[i].length * 0.01;
        console.log(T[i].toFixed(2));
        }
        
/*
Testado e aprovado na plataforma

let num = parseInt(gets());

let palavra = [];
let tempoGasto = [];

for (let i = 0; i < num; i++) {
  palavra[i] = gets();       
  tempoGasto[i] = palavra[i].length * 0.01;
  print(tempoGasto[i].toFixed(2));
}


*/