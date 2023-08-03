class Player {
    // readonly can't change value
    // public does not change nothing cause they already public just to help developers 
    public readonly first: string;
    public readonly last: string;
    // private = private or #(javaScripts sintax)
    protected _score: number | string = 0;

    constructor(first: string, last: string) {
        this.first = first,
        this.last = last
    }
    
    private secretMethod() {
        console.log("SECRETMETHOD");
        
    }
};

const elton = new Player("Elton", "Steele")
// elton.first = "gian" ERROR
// elton.score = 1223 ERROR
console.log(elton);
// console.log(elton.secretMethod());ts complains but still works in javascript

class Player2 {
    // public readonly first: string;
    // public readonly last: string;
    private _score: number | string = 0;
    // shortcourt
    constructor(public first: string, public last: string) {
        
    }
    
    private secretMethod() {
        console.log("SECRETMETHOD");
        
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }
    
    get score(): number {
        return this.score
    }
    //  changing a private var
    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error("Score cannot be negative")
        } 
        this._score = newScore;
    }
};

const elton2 = new Player2("Elton", "Steele");
console.log(elton2.fullName);
elton2.score = 9
console.log(elton2);


class SuperPlayer extends Player {
    isAdmin: boolean = true;

    maxScore() {
        // score private not access in other classes
        // CHANGE IT FOR PROTECTED = NOT IN NEW OBJECTS BUT OK IN OTHER EXTENDED CLASSES
        this._score = 9999
    }
}

// CLASSES INTERFACE 

interface Colorful {
    color: string
}

interface Printable {
    print(): void
}
class Bike implements Colorful {
    // color = "blue" OR
    constructor(public color: string) {

    }
}

// more than 1 implement
class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {

    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
        
    }
}

const bike1 = new Bike("red")
const jacket1 = new Jacket("north-face", "blue")

// ABSTRACT CLASS NOT IN JS JUST IN TS
// i can't create instance(objects) just extend classes
abstract class Employee {
    constructor(public first: string, public last: string) {
        
    }
    // abstract here exist only in new subclasses
    abstract getPay(): number
    greet() {
        console.log("Hello");
        
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWeekly: number){
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWeekly
    }
}

const navas = new FullTimeEmployee("Franco", "Navas", 9555)
console.log(navas.getPay());

const sil = new PartTimeEmployee("Sil", "Bar", 24, 1100)
console.log(sil.getPay());



