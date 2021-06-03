"use strict";
// Crear una Fotografia
/* function createPicture(title, date, size) {
} */
// Usanmos TS, definimos tipos para parametros
function createPicture(title, date, size) {
    // Se crea la FOtografia
    console.log('create Picture using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03'); // Error
// Parametros Opcionales en funciones
function createPicture2(title, date, size) {
    // Se crea la FOtografia
    console.log('create Picture using', title, date, size);
}
createPicture2('My Birthday', '2020-03-10', '500x500');
createPicture2('Colombia Trip', '2020-03');
// Flat Array Function
var createPic = function (title, date, size) {
    /* return {
        title: title,
        date: date,
        size: size
    }; */
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
// TIpo de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'OK');
    console.log('result', result);
    result = handleError(404, 'error');
    console.log('result', result);
}
catch (error) {
    console.log('Hay un error');
}
