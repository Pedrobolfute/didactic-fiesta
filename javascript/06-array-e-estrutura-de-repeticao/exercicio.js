/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeroDado = 6;

console.log('Tabuada do ' + numeroDado);
console.log('\nSoma');
for (let i = 0; i < numeros.length; i++){
  console.log(`${numeroDado} + ${numeros[i]} = ${numeroDado + numeros[i]}`);
}
console.log('\nSubtração');
for (let i = 0; i < numeros.length; i++){
  console.log(`${numeroDado} - ${numeros[i]} = ${numeroDado - numeros[i]}`);
}
console.log('\nMultiplicação');
for (let i = 0; i < numeros.length; i++){
  console.log(`${numeroDado} * ${numeros[i]} = ${numeroDado * numeros[i]}`);
}
console.log('\nDivisão');
for (let i = 0; i < numeros.length; i++){
  if(numeros[i] === 0){
    console.log(`${numeroDado} / ${numeros[i]} = Error`);
  }else{
    console.log(`${numeroDado} / ${numeros[i]} = ${(numeroDado / numeros[i]).toFixed(2)}`);
  }
}