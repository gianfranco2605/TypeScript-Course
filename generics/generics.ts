// interface Array<Types>
const nums: Array<number> = []
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>("username")!;
inputEl.value = "new value";



function numberIdentity(item: number): number {
    return item
}

function stringIdentity(item: string): string {
    return item
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// or i can do this, but no sense 

function identity1(item: any): any {
    return item;
}

// or generic function that establish a relation

function identity<Type>(item: Type): Type {
    return item
}

// calling the function
identity<number>(10)
// error
// identity<number>("hello")

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandomElement<string>(['a', 'b', 'c']);
// or, ts knows is a string array
getRandomElement(['a', 'c', 'p'])
getRandomElement<number>([3, 4, 5]);

// in react sintax is diferent use the ","
const getRandomElement2 = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

// generic with multiple types
function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}

const comboObj = merge({name: 'colt'}, {pets: ['blue', 'elthon']})

// no necesary to do like this TS knows 
merge<{name: string}, {pets: string[]}>({name: 'colt'}, {pets: ['blue', 'elthon']})

// to tell has to be and object 
function objects<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}

// using interface

interface Lengthy {
    length: number
}

function printDouble(thing: Lengthy): number {
    return thing.length * 2
}

printDouble("hello")
// error
// printDouble(12345)

// Default value
function makeEmptyArray<T = number>(): T[] {
    return[]
}

const nums1 = makeEmptyArray();
// but i can change it
const bools = makeEmptyArray<boolean>()

// Generic classes
interface Song{
    title: string,
    artist: string
}

interface Video{
    title: string,
    creator: string
    resolution: string
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}

const song = new Playlist<Song>()
const videos = new Playlist<Video>()
videos.add()

