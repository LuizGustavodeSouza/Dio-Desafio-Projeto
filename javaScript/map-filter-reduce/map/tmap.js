const numero = [1,2,3,4]; //1°array

function myMap(arr){            
    
    return arr.map(function (item) {
        return item * 2;                //item = number * 2
    }); 

}
const number = [1,2,3,4];//2°array

console.log("Array original = "+number);
console.log('Array multiplicado = ' + myMap(number)); //chama a função myMap passando number para item * 2
