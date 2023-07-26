let age: number|string|boolean = 21;
age = 23;
age = "24";
age = true; // not do it


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.435, long: 23.5433 };

//Union types and functions

function printAge( age: number|string ): void {
    console.log(`You are ${age} years old`);

}

printAge(23);
printAge("27");

// conditional
function calcolateTax(price: number | string, tax: number) {
    if(typeof price === "string") {
        price.replace("$", "")
    }else {
        price * tax;
    }
}

// union types and arrays
// const nums: number [] = [1, 2, 3, 4] not union type
//const stuff: any[] = [1, 2, 3, 4, true, "asdas", {}] not union type()any

const stuff: (number | string)[] = [1, 2, 3, "4", "5"]

const stuff2: number[] | string[] = ["asd", "bsc"] //or an array of number or array of string not union types

const coords: (Point | Loc)[] = [];
coords.push({ lat: 12344, long: 23445 })
coords.push({ x:321, y:23445 })

// Literal types
const zero: 0 = 0;
let hi: "hi" = "hi";

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"
// mood = "Overwhelming" error

type DayOfWeek = 
| "Monday"
| "Tuesday"
| "Wednesday"
| "Thursday"
| "Friday"
| "Saturday"
| "Sunday"

let today: DayOfWeek = "Monday"