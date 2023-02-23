console.log('Array ou lista')
const alunos = ['João', 'Pedro', 'Salomé']
console.log(alunos);
console.log(alunos[1]);
console.log(alunos[2]);

//push
console.log('Adicionando no final da lista, push.')
alunos.push('Nane');
console.log(alunos)
alunos[4] = 'Cica'
console.log(alunos)

//Iniciando com lista vazia
console.log('Iniciando com a lista vazia.');
const alunosTeste = [];
alunosTeste.push('teste');
alunosTeste.push(10);
console.log(alunosTeste);

//pop
console.log('Removendo o ultimo da lista, pop.')
alunosTeste.pop();
console.log(alunosTeste);

//Exemplo de exercicio
console.log('Exemplo de exercicio');
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
console.log(notas.length);
soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / 5);
console.log('...................................');

//Estrutura de repetição
console.log('Estrutura de repetição.');
console.log('For');
for(let i = 0; i < 5; i++){
  console.log(i+1);
}

console.log('Percorrendo uma string')
const nome = 'Pedro H.S. Paixão';
for(let i = 0; i < nome.length; i++){
  console.log(nome[i]);
}
console.log('....................................');

//Exemplo de aplicação
console.log('Exemplo prático');
let somar = 0;
for(let i = 0; i<notas.length; i++){
  const nota = notas[i];
  somar = somar + nota;
}
const media = somar / notas.length;
console.log(media);

console.log('Depuração de código. f5, f10...');