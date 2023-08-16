// importing types, "remember js not ts"
import { Person } from "./types.js";
// or
// import { type Person } from "./types.js";


class User implements Person { 
    constructor(public username: string, public email: string) {}

    logout() {
        console.log(`${this.username} logs out`);
        
    }
}


export function userHelp() {
    console.log('HELP');
    
}

// when using default only one default, but i can use exports
export default User;