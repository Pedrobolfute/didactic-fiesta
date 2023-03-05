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

const {gets, print} = require('./funcoes-auxiliares1');

const mediaAluno = gets();
if(mediaAluno < 5){
  print('Reprovado');
}else if(mediaAluno >= 5 && mediaAluno < 7){
  print('Recuperação');
}else{
  print('Aprovado');
}