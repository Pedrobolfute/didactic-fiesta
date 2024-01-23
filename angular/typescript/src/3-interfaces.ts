//Mais pro lado do objeto
type robot = {
  readonly id:number | string,
  name:string
}

//Mais pro lado das classes
interface robot2 {
  readonly id:number | string,
  name:string,
  sayHello():string
}

const bot:robot = {
  id: 1,
  name: 'megaman'
}

const bot2:robot2 = {
  id: 1,
  name: 'megaman',
  sayHello():string{
    return 'lol'
  }
}

console.log(bot)
console.log(bot2)

class Pessoas implements robot2{
  id: string | number
  name: string

  constructor(id:(string | number), name:string){
    this.id = id
    this.name = name
  }
  sayHello(): string {
    return `Hello, ${this.name}`
  }
}

const p = new Pessoas(1, "Pedrosa")

console.log(p.sayHello())