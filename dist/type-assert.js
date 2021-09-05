"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> // Angle Bracket syntax
let username;
username = 'luixaviles';
username = 'david';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('message', message);
let usernameWithId = 'luixaviles 1';
// COmo obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
let helloUser;
helloUser = 'Hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
