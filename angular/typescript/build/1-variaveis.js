"use strict";
//var primitivas: string, boolean, number
let nome = 'Pedro';
let isTrue = true;
let idade = 25;
let altura = 1.9;
//var especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno = void function execultaAlgo() {
    console.log('retornei nada só Li');
};
let retornoView = false;
let retornoView2 = 'lol';
let retornoView3 = 2;
//objeto - sem previsibilidade
let product = {
    "opa": "yes",
    nome: "Pedro",
    cidade: "sp",
    idade: 25
};
let meuProduto = {
    nome: "tenis",
    preco: 3.99,
    unidades: 3
};
console.log(meuProduto.nome);
//Arrays
let dados = ["Pedro", "Nane", "Maria"];
let dados2 = ["Pedro", "Nane", "Maria"];
//Arrays multitipos
let infos = ["Pedro", "Maria", 3, 4];
//tuplas - vetor de multitiples mas tem um lugar certo pra cada coisa
let boleto = ["Agua conta", 199.9, 456789];
//Datas
let aniversario = new Date('2024-12-5 05:00');
console.log(aniversario.toString());
