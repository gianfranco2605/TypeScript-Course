"use strict";
class Player {
    constructor(first, last) {
        // private = private or #(javaScripts sintax)
        this._score = 0;
        this.first = first,
            this.last = last;
    }
    secretMethod() {
        console.log("SECRETMETHOD");
    }
}
;
const elton = new Player("Elton", "Steele");
// elton.first = "gian" ERROR
// elton.score = 1223 ERROR
console.log(elton);
// console.log(elton.secretMethod());ts complains but still works in javascript
class Player2 {
    // shortcourt
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // public readonly first: string;
        // public readonly last: string;
        this._score = 0;
    }
    secretMethod() {
        console.log("SECRETMETHOD");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this.score;
    }
    //  changing a private var
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
;
const elton2 = new Player2("Elton", "Steele");
console.log(elton2.fullName);
elton2.score = 9;
console.log(elton2);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        // score private not access in other classes
        // CHANGE IT FOR PROTECTED = NOT IN NEW OBJECTS BUT OK IN OTHER EXTENDED CLASSES
        this._score = 9999;
    }
}
class Bike {
    // color = "blue" OR
    constructor(color) {
        this.color = color;
    }
}
// more than 1 implement
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("north-face", "blue");
// ABSTRACT CLASS NOT IN JS JUST IN TS
// i can't create instance(objects) just extend classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWeekly) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWeekly = hoursWeekly;
    }
    getPay() {
        return this.hourlyRate * this.hoursWeekly;
    }
}
const navas = new FullTimeEmployee("Franco", "Navas", 9555);
console.log(navas.getPay());
const sil = new PartTimeEmployee("Sil", "Bar", 24, 1100);
console.log(sil.getPay());
