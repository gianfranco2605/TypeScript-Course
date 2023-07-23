function square(num: number) {
    return num * num
}

function great(person: string) {
    return `Hi ${person}`
}

const doSomething = (person: string, age: number, isFunny: boolean) => { return `Hi, i'm ${person} and i'm ${age} years old, ${isFunny}` } 

// default value

function great2(person: string = "stranger") {
    return `Hi ${person}`
}

// creating a function with a return type

function square2(num: number): number {
    return num * num
}

// ts: string | number
function rando(num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// arrow function with default and return type
const add = (x: number = 5, y: number = 5): number => {
    return x + y;

}


// anonymus function 
const colors = ["red", "black", "green"]
colors.map((color) => {//i don't need to use color: string, ts knows it
    return color.toUpperCase()
})

// Void functions(functions that do not return nothing, data)

// not necesary to use void but necesary for info
function printTwice(msg: string):void {
    console.log(msg);
    console.log(msg);
    
} 


