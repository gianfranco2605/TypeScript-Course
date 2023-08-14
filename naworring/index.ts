// naworring = typeof

function triple(value: number | string) {
    if(typeof value === "string"){
        return value.repeat(3)
    }
    if(typeof value === "number") {
        return value * 3
    }
}

// Truthiness another naworring

const el = document.getElementById('#id');
// Truty
if(el){
    el// do something
// Falsy null
} else {
    el // do something
}

// ? undefined
const printLetters = (word?: string) => {
    // truthy
    if(word) {
        for(let char of word) {
            console.log(char);
            
        }
    // string or undefined
    } else {
        word
        console.log("You did no pass a word");
        
    }
}

// Equality Narrowing
// ts does not see the error 
function someDemo(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase
    }
}
// console error 
someDemo(3, "3")

// "in" operator naworrring
interface Movie {
    title: string,
    duration: number
}

interface TVshow {
    title: string,
    numEpisode: number,
    episodeDuration: number
}

function getRunTime(media: Movie | TVshow) {
    if ("numEpisode" in media) {
        return media.numEpisode * media.episodeDuration
    }
    return media.duration
}

getRunTime({title: 'Amadeus', duration: 140})
// log 140
getRunTime({title: 'StarWars', numEpisode: 1, episodeDuration: 40})
// log 40

// Intance  of Narrowing "remember prototypes"
function printFullDate(date: string | Date) {
    // Date = js native function
    if(date instanceof Date) {
        console.log(date.toUTCString);
    } else {
        console.log(new Date(date).toUTCString());
        
    }
}

class User {
    constructor(public username: string ){}
}

class Company {
    constructor(public name: string ){}
}

function printName(entity: User | Company) {
    if(entity instanceof User){
        console.log("user prot");
        
    }else {
        console.log("company prot");
        
    }
}

// Type Predicates 
interface Cat {
    name: string,
    numLives: number;
}

interface Dog {
    name: string;
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined

}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
        return "Meow"
    }else {
        animal
    }
}

// Discriminated Unions

// all same values
interface Rooster {
    name: string,
    weight: number,
    age: number
    __type: "rooster"
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    __type: "cow"
}

interface Pig {
    name: string,
    weight: number,
    age: number
    __type: "pig"
}

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.__type){
        case("pig"):
         return "Oink"
        case("cow"):
         return "Muuu"
        case("rooster"):
         return "Kikiriki"
        default:
            //we should never make it here, if we handle all cases correctly
    }
}

const stevie: Rooster = {
    name: 'Stevie',
    weight: 2,
    age: 1.5,
    __type: "rooster"
}

console.log(getFarmAnimalSound(stevie));
// log = Kikiriki


