"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// lodash does not have type declaration file (has to be import separately "npm install --save-dev @types/lodash ")
const lodash_1 = __importDefault(require("lodash"));
// axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
//     .then((res) => {
//         console.log("yea");
//         console.log(res.data);
//         const { data } = res
//         printUser(res.data)
//     })
//     .catch((e) => {
//         console.log('error', e)
//     })
//     function printUser(user: User) {
//         console.log(user.name);
//         console.log(user.email);
//         console.log(user.phone);
//     }
// another end point all users 
axios_1.default.get('https://jsonplaceholder.typicode.com/users/')
    .then((res) => {
    console.log("yea");
    console.log(res.data);
    const { data } = res;
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log('error', e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
console.log(lodash_1.default.sample([234, 432, 244, 100]));
