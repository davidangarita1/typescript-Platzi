"use strict";
console.log('Hola soy main');
// NUmber
// Explicito
let phone;
phone = 1;
phone = 34534534;
// phone = 'home'; // Error
// Inferido
let phoneNumber = 34534534;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
let hex = 0xf00d; // Hexadecimal
let binary = 0b1010; // Binario
let octal = 0o744; // Octal
// Tipo: Boolean
// TIpado Explicito
let isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; Error!
// String
let userName = 'David';
userName = "Alba Rudas";
// userName = true; // Error!
// Tempalte String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username: ${userName}
    firtName: ${userName + ' Angarita'}
    phone: ${phone}
    isPro: ${isPro}
    --------------------------------------
`;
console.log('userInfo', userInfo);
