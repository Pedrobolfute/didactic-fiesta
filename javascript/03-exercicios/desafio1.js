/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

console.log('Questão 01: ');
var nota1 = 6;
var nota2 = 8;
var nota3 = 8;
var situation;

media = ((nota1 + nota2 + nota3)/3).toFixed(2);

if(media < 5){
  situation = 'Reprovado;';
} else if(media >= 5 && media <=7){
  situation = 'Recuperação';
} else{
  situation = 'Aprovado';
}

console.log('Media do aluno: ' + media + ' | ' + situation);
console.log('----------------------------------------------');