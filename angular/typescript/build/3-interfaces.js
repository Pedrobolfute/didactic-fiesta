"use strict";
const bot = {
    id: 1,
    name: 'megaman'
};
const bot2 = {
    id: 1,
    name: 'megaman',
    sayHello() {
        return 'lol';
    }
};
console.log(bot);
console.log(bot2);
class Pessoas {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
}
const p = new Pessoas(1, "Pedrosa");
console.log(p.sayHello());
