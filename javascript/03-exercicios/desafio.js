/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;


2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;


3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


console.log('Questão 01: ');
var nota1 = 4;
var nota2 = 86;
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



console.log('\n\nQuestão 02: ');

var imc;
var situcaoIMC;
var preciso;
var peso = 70;
var altura = 1.85;

imc = (peso / (altura * altura));

if(imc < 18.5){
  preciso = ((18.5*(altura*altura))-peso).toFixed(2);
  situcaoIMC = 'Abaixo do peso. | Precisa ganhar: ' + preciso + 'Kg';
} 
else if (imc >= 18.5 && imc <= 25){
  situcaoIMC = 'Peso normal, continue assim!';
} 
else if(imc > 25 && imc <=30){
  preciso = (peso-(25*(altura*altura))).toFixed(2);
  situcaoIMC = 'Acima do peso. | Precisa perder: ' + preciso + 'Kg';
} 
else if(imc > 30 && imc <= 40){
  preciso = (peso-(25*(altura*altura))).toFixed(2);
  situcaoIMC = 'Obeso | Precisa perder: ' + preciso + 'Kg';
} 
else{
  preciso = (peso-(25*(altura*altura))).toFixed(2);
  situcaoIMC = 'Obesidade grave | Precisa perder: ' + preciso + 'Kg';
  
}

console.log('IMC: ' + imc.toFixed(2) + ' | ' + situcaoIMC);
console.log('----------------------------------------------');



console.log('\n\nQuestão 03: ');

var tipoPagamento = 2;
var produto = 45;

var avistaDebito = 0.9 * produto;
var avistaPix = 0.85 * produto ;
var duasVezes = 1 * produto;
var acimaDuas = 1.1 * produto;

console.log('Qual o Método de pagamento?');
console.log('1-Débito à vista.\n2-Pix à vista.\n3-Dividir 2x.\n4-Dividir +2x.');

if(tipoPagamento === 1){
  console.log('Preço do produto: ' + produto);
  console.log('Débito à vista: ' + avistaDebito);
}
else if(tipoPagamento === 2){
  console.log('Preço do produto: ' + produto);
  console.log('Pix à vista: ' + avistaPix);
}
else if(tipoPagamento === 3){
  console.log('Preço do produto: ' + produto);
  console.log('Duas vezes: ' + duasVezes);
}
else if(tipoPagamento === 4){
  console.log('Preço do produto: ' + produto);
  console.log('Mais de duas vezes, juros de 10%: ' + acimaDuas);
}
else{
  console.error('Error. Tipo de pagamento inválido!')
}
