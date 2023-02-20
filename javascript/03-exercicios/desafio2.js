/*
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
*/

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