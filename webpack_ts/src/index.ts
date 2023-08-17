import { Dog } from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("from index");

const elton = new Dog("Elthon", "Aussie", 0.5);
elton.bark();

const cholo = new ShelterDog("Cholo", "French", 12, "Puddle")
cholo.bark()

console.log(add(4, 4));
console.log(multiply(4, 4));
console.log(divide(4, 4));
