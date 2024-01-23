"use strict";
//classe tipando (usar desse q é melhor...)
class character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attach with ${this.strength} points`);
    }
}
//Alternativa com ?
class characterOne {
    attack() {
        console.log(`${this.name}Attach with ${this.strength} points`);
    }
}
const p1 = new character('Pikachuu', 43, 22);
p1.attack();
//Modificadores de acesso (data modifiers)
//public > quando n passo nada o modificador de acesso é publico
//private > acessada somente de dentro DESSA classe
//proteceted > pode ser enxergado de dentro da classe e de subclasses que herdam ela.
class characterTwo {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attach with ${this.strength} points`);
    }
}
const p2 = new characterTwo('ryu', 2, 4);
p2.attack(); //Não consigo acessas name porque é private
//Subclasses
//character > superclass
//Magicia > subclass
class Magicia extends character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p3 = new Magicia('Mago', 4, 20, 44);
