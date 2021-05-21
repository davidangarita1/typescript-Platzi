"use strict";
console.log('Hola soy main');
// NUmber
// Explicito
var phone;
phone = 1;
phone = 34534534;
// phone = 'home'; // Error
// Inferido
var phoneNumber = 34534534;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
var hex = 0xf00d; // Hexadecimal
var binary = 10; // Binario
var octal = 484; // Octal
// Tipo: Boolean
// TIpado Explicito
var isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; Error!
// String
var userName = 'David';
userName = "Alba Rudas";
// userName = true; // Error!
// Tempalte String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + userName + "\n    firtName: " + (userName + ' Angarita') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n    --------------------------------------\n";
console.log('userInfo', userInfo);
