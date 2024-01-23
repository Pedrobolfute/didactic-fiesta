//decorators

function ExibirNome(target: any){
  console.log(target)
}

@ExibirNome //Habilitar ele no tsconfig.json
class Funcionario {}

//Class decorators
function apiVersion(varsion:string){
  return (target:any) => {
    Object.assign(target.prototype, {__version: apiVersion, __name: "Pedro"})
  }
}

//Atribbute Decorator
function minLength(arg0:number){
  return (target:any, key:string) => {
    console.log(target[key])
    // console.log(key)

  }
}

class Api{
  @minLength(3)
  name:string
  constructor(name:string){
    this.name = name;
  }
}

const api = new Api("ll")
console.log(api)