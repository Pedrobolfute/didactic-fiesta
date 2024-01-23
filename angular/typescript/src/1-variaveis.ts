//var primitivas: string, boolean, number
let nome:string = 'Pedro'
let isTrue:boolean = true
let idade:number = 25
let altura:number = 1.9

//var especiais: null, undefined
let nulo:null = null
let indefinido:undefined = undefined

//tipos abrangentes: any, void
let retorno:void = void

function execultaAlgo():void{
  console.log('retornei nada só Li')
}

let retornoView:any = false
let retornoView2:any = 'lol'
let retornoView3:any = 2

//objeto - sem previsibilidade
let product:object = {
  "opa": "yes",
  nome:"Pedro",
  cidade:"sp",
  idade:25
}

//objeto totalmente tipado
type ProdutoLoja = {
  nome:string,
  preco:number,
  unidades:number
}

let meuProduto:ProdutoLoja = {
  nome:"tenis",
  preco:3.99,
  unidades:3
}
console.log(meuProduto.nome)


//Arrays
let dados:string[] = ["Pedro", "Nane", "Maria"]
let dados2:Array<string> = ["Pedro", "Nane", "Maria"]

//Arrays multitipos
let infos:(string | number)[] = ["Pedro", "Maria", 3, 4]

//tuplas - vetor de multitiples mas tem um lugar certo pra cada coisa

let boleto:[string, number, number] = ["Agua conta", 199.9, 456789]

//Datas

let aniversario:Date = new Date('2024-12-5 05:00')
console.log(aniversario.toString())