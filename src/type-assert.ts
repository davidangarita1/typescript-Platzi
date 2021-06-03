export {};
// <> // Angle Bracket syntax
let username: any;
username = 'luixaviles';
username = 'david'

// tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}`       :
                        `Username is too short`;
console.log('message', message);

let usernameWithId: any = 'luixaviles 1';
// COmo obtener el username?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ?
        `Welcome ${username}`             :
        `Username is too short`;
let helloUser: any;
helloUser = 'Hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);
