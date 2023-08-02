"use strict";
class Player {
    // would exist only in the class
    static description = "Player in our game";
    // _convention to not touch this var
    // _score = 0;
    // # private
    #score = 0
    numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }
    static randomPlayer() {
        return new Player("Andy", "Samberg")
    }
    // getters setters
    get fullName() {
        return `${this.first} ${this.last}`
    }
    get score() {
        return this.#score
    }
    set score(newScore) {
        if(newScore < 0) {
            throw new Error("Score must be positive")
        }
        this.#score = newScore;
    }
    getScore() {
        return this.#score
    }
    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt() {
        console.log("wowww");    
    }
    loseLive() {
        this.numLives -= 1;
    }
    #secret() {
        console.log("SECRET");
    }
}

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1.fullName);
console.log(player1.score);
player1.score = 20;
console.log(player1.score);

const player2 = new Player("charlie", "brown");
// i see it but i can't change it
// player2.#score = 5
console.log(player2);

console.log(Player.randomPlayer());


// extends
class AdminPlayer extends Player {
    constructor(first, last, powers) {
        // contructor parent
        super(first, last)
        this.powers = powers
    }
    isAdmin = true;
}

console.log(AdminPlayer);
const admin = new AdminPlayer("gian", "franco", ["navas"])
console.log(admin);