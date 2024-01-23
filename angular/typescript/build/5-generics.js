"use strict";
//Operador de spread que só concatena tudo em um argumento só
function concatArray(...itens) {
    return new Array().concat(...itens); //... > operador de spread
}
const numArray = concatArray([1, 3], [2]);
numArray.push([32]);
const numArray2 = concatArray(['dede', 'aaa'], ['rrr']);
console.log(numArray);
console.log(numArray2);
