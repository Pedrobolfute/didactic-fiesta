/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par encontrado.
*/

const numero = 26;
const lista = [];

for(let i = 0; i <= numero; i++){
  lista.push(i);
}

for(let i = 0; i <= numero; i = i+2){
  if(i === lista[i]){
    console.log(i);
  }
}