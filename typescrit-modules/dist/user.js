class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}
export function userHelp() {
    console.log('HELP');
}
// when using default only one default, but i can use exports
export default User;
