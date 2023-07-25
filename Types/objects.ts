// Function object

// Remember void return nothing or not value
function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`);
    
};

printName({ first: "Gianfranco", last: "Navas" });

// Object params more
//printName({ first: "Gian", last: "Fernandini", age: 43 }) // ts complains error 
const gemelo = { first: "Gian", last: "Fernandini", age:43 }
printName(gemelo) // ts not complains


// More object types

//WEIRD SYNTAX         type                     object
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

//                           type, like void, string etc..
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y:Math.random()}
}


// Nested Objects

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writter: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033

}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
    

}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous brothers",
    numStreams: 123,
    credits: {
        producer: "Phil Spector",
        writter: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);



