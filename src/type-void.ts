// Void

// Tipo explicito
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    //   return 'hola';
}

showInfo({id: 1, username: 'angarita', firstName: 'David'});

// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'angarita', firstName: 'David'})

// tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null; Error solo en use strict
unusable = undefined;

// -----------------------------------------------------------------------------
// Tipo: Never

function handleError(code:number, message: string): never {

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {

}

function sumNUmbers(limit: number) {
    let sum = 0;
    while(true) {
        sum++
    }
    // return sum;
}

// sumNUmbers(10);
// ciclo infinito, programa nunca termina
