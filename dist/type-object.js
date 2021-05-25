"use strict";
// Type: object
var user;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs topo TS)
var myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
var isInstance = myObj instanceof Object; // clase Object Javascript
console.log('isIntance', isInstance);
console.log('user.username', myObj.username);
