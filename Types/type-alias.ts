// type alias
type Point = {
    x: number;
    y: number;
    z?: number// ? optional
}

function randomCoordinate1(): Point {

    return {x: Math.random(), y:Math.random()}

};

const myPoint: Point = { x: 1, y: 3, z: 2  };

function doublePoint(point: Point) {

    return {x: point.x *2, y: point.y *2};

}

//readonly
type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 12345,
    username: "Superman"
}

console.log(user.id);
// user.id = 23456  i can't is just read only

// combine types

type Circle = {
    radius: number;
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

// 3 types
type CatDog = Cat & Dog & {
    age?: number;
}

const cholo: CatDog = {
    numLives: 15,
    breed: "Husky",
    age: 9
}




