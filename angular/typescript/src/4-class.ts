//classe tipando (usar desse q é melhor...)
class character{
  name:string
  strength:number
  skill:number

  constructor(name:string, strength:number, skill:number){
    this.name = name
    this.strength = strength
    this.skill = skill
  }
  attack():void{
    console.log(`Attach with ${this.strength} points`)
  }
}

//Alternativa com ?
class characterOne{
  name?:string
  strength?:number
  skill?:number

  attack():void{
    console.log(`${this.name}Attach with ${this.strength} points`)
  }
}

const p1 = new character('Pikachuu', 43,22)
p1.attack()

//Modificadores de acesso (data modifiers)
  //public > quando n passo nada o modificador de acesso é publico
  //private > acessada somente de dentro DESSA classe
  //proteceted > pode ser enxergado de dentro da classe e de subclasses que herdam ela.
class characterTwo{
  private name:string
  strength:number
  skill:number

  constructor(name:string, strength:number, skill:number){
    this.name = name
    this.strength = strength
    this.skill = skill
  }
  attack():void{
    console.log(`Attach with ${this.strength} points`)
  }
}

const p2 = new characterTwo('ryu', 2,4)
p2.attack() //Não consigo acessas name porque é private


//Subclasses
  //character > superclass
  //Magicia > subclass
class Magicia extends character{
  magicPoints:number
  constructor(name: string, strength:number, skill:number, magicPoints:number){
    super(name, strength, skill)
    this.magicPoints = magicPoints
  }
}

const p3 = new Magicia('Mago', 4, 20, 44)