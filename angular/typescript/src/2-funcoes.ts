//funções
function addNumber(x:number, y:number):number{
  return x+y;
}
let soma:number = addNumber(2, 4)
console.log(soma)

function sayHello(nome:string):string{
  return `Hello, ${nome}`
}
console.log(sayHello('Pedro'))

function callToPhone(phone: number | string): number | string{
  return phone
}

async function getDataBase(id:number):Promise<string | number>{
  return "Pedro"
}