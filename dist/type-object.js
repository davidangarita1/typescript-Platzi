"use strict";
// Type: object
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs topo TS)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Object Javascript
console.log('isIntance', isInstance);
console.log('user.username', myObj.username);
