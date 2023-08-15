import axios from 'axios';
// lodash does not have type declaration file (has to be import separately "npm install --save-dev @types/lodash ")
import _ from 'lodash';




interface User {
    id: number,
    name: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            ing: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string
        bs: string
    };
}

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
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users/')
    .then((res) => {
        console.log("yea");
        console.log(res.data);
        const { data } = res
        res.data.forEach(printUser)
          
        
    })
    .catch((e) => {
        console.log('error', e)
        
    })

    function printUser(user: User) {
        console.log(user.name);
        console.log(user.email);
        console.log(user.phone);
        
    }


    console.log(_.sample([234, 432, 244, 100]));
