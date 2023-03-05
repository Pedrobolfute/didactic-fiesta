/*
1) Faça um programa que receba a media de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

Exemplo:
  Entrada:
    5.5
  Saida:
    Recuperação
*/

const entrada = 5.5;
function gets(){
  return entrada
}

function print(saida){
  console.log(saida)
}

module.exports = {gets, print}