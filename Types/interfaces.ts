// like types to shape objects(only objects)

// types
type Point = {
    x: number,
    y: number
}

// interfaces
interface Point1 {
    x: number,
    y: number
}

const pt1: Point1 = { x: 123, y: 121};

interface Person {
    readonly id: number; // readonly remember i can't change it
    first: string,
    last: string,
    nickname?: string,// ? = optional "remember"
    sayHi: () => string; // a method that have to return a string,
    // sayHi(): string; "another way"
}

const thomas: Person = {
    first: "Gian",
    last: "Navas", 
    nickname: "G", 
    id: 2656,
    sayHi: () => { // Interface methods
        return "Hello"
    }

    }

thomas.first = "Franco"
// thomas.id = 2323 error

interface Products {
    name: string,
    price: number,
    applyDiscount(discount: number): number,  //with params
}

const shoes: Products = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};

shoes.applyDiscount(0.4)

// repeat no problem like types 
interface Dog {
    name: string,
    age: number
}

interface Dog {
    breed: string,
    bark(): string //remember return a string
}

const elton: Dog = {
    name: "Elton",
    age: 1,
    breed: "Australian",
    bark() {
        return "Wor"
    }
}

// Extends like classes in javascript
interface ServiceDog extends Dog {
    job: string
}

const chewy: ServiceDog = {
    name: "Cholo",
    age: 8,
    breed: "French",
    bark() {
        return "wow"
    },
    job: "guide dog"
}

// Multiple extends

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const gian: Engineer = {
    name: "Gianfranco",
    id: 12345,
    email: "correo@correo.com",
    level: "Junior",
    languages: ["html", "css", "javascript"]
}

// Interface vs Types Aliaces
type Color = "red" | "blue"  // i can't do it in interfaces

// EXTENDS IN TYPES 
type Name = {
    name: string
}

type LastName = Name & {
    lastName: string
}
