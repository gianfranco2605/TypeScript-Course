interface Chicken {
    breed: string,
    eggsPerWeek: number,
    name: string,
    age: number,
}

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 4
}

const cholito: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 5,
    name: "Cholito",
    age: 2
}

// tsc -w <namefile.ts> to live changes