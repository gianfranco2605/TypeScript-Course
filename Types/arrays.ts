
const activeUsers: string[] = [];
activeUsers.push("Gian");
// activeUsers.push(23); complains

// Alternative
const activeperson: Array<string> = [];
const activeperson2: Array<number> = [];

// Types(remember is not an object) you will never see this in javascript

type Point2 = {
    x: number,
    y: number
};

const coords: Point[] = []
coords.push({x: 23, y: 8})
//coords.push({x: 3, y: "string"}) complains is not a string


// Multidimencional arrays
const board: string[][] = [["X", "Y", "Z",], ["W", "E",]]

