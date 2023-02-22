//EX: Console.log() O console é uma variável objeto que contém métodos, como o log.

//Coleção "dinamica" de chava e valor

//this: como ele está dentro do obbjeto pedro, então ele assume "este" pedro.
  
  const pedro = {
  nome: 'Pedro H Salomé',
  idade: 24,
  
  //Método
  descrever: function(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    //console.log(`Meu nome é ${pedro.nome} e minha idade é ${pedro.idade}`)
  }
};

console.log('Objeto nomal.')
console.log(pedro.nome);
console.log(pedro.idade);
console.log(pedro);
console.log('-----------------------------------------------');

console.log('Adicionando "dinamicamente" altura ao objeto.');
pedro.altura = 1.85;
console.log(pedro);
console.log('------------------------------------------------');

console.log('Método do objeto.');
pedro.descrever();
console.log();
console.log('------------------------------------------------');

console.log('Mudando valores dinamicamente do objeto.');
pedro.idade = 25;
pedro['nome'] = "Pietro";
console.log(pedro);
console.log('-------------------------------------------------');


//Agora com classes (uma definição do objeto).

//Definição = classe
class Pessoa{
  name;
  age;

  describe(){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

//Ocorrencia = instância
const nane = {
  nome: 'Flavia S Salomé',
  idade: 18,

  descrever: function(){
    console.log(`Nome: ${this.name} \nIdade ${this.idade}`);
  }
}

//Instanciando uma pessoa à classe que ela deve pertencer.
//E atribuindo seus valores...
const gabriel = new Pessoa();
gabriel.name = 'Gabriel';
gabriel.age = 18;
console.log(gabriel)

const Dani = new Pessoa();
Dani.name = 'Danielle';
Dani.age = 5;
console.log(Dani)

gabriel.describe();
Dani.describe();
console.log('-----------------------------------------------');

//Constructor
class People{
  peopleName;
  peopleAge;

  constructor(peopleName, peopleAge){
    this.peopleName = peopleName;
    this.peopleAge = peopleAge;
    this.birthYear = 2022 - peopleAge;
  }
}

const Henrique = new People('Henrique', 24);
console.log(Henrique)
