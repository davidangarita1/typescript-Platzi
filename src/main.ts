console.log('Hola soy main');

// NUmber
// Explicito
let phone: number;
phone = 1;
phone = 34534534;
// phone = 'home'; // Error

// Inferido
let phoneNumber = 34534534;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binario
let octal: number = 0o744; // Octal

// Tipo: Boolean
// TIpado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Inferido
let isUserPro: false;