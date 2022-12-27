const numero = 95;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0 || numero >= 100){
  console.log('O número é invalido');
}else if(numeroDivisivelPor5){
  console.log('sim');
} else{
  console.log('Não');
}