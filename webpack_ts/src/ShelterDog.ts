import { Dog } from "./Dog";

export default class ShelterDog extends Dog {
    constructor(
        public name: string,
        public breed: string,
        public age: number, 
        public shelter: string) {
        super(name, breed, age)
    }
}