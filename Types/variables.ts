let movieTitle: string = "Star Wars"

// i can
movieTitle = "Return of the Jedi"

// i can't change types like JavaScript
// movieTitle = 9;

let catLives: number = 7;
catLives +=1;

// i can't
// catLives = "zero";

let gameOver: boolean = true; 
gameOver = false;

// Type inference = no need to declare the type

let tvShow = "That's 70's Show";
tvShow = "The Other 2"

// Any type = use it parsimonia

let thing: any = "Hello";
thing = 28;
thing = true;
thing()
thing.toUppercase();


const movies  = ["Star Wars", "Arrivals", "Aliens"]
let foundMovie; // ts declares this variable as ANY.

for (let movie of movies ) {
    if (movie === "Star Wars") {
        foundMovie === "Star Wars"
    }
} 

foundMovie = 1;
foundMovie();

// avoid that 

// do this 

let foundMovie2: string;