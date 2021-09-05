/*
Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.
*/

export {};

// [1, 'user']
let user: [number, string];
user = [1, 'luixaviles']

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfor', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'luixaviles']); // 0
array.push([2, 'paparazzi']); // 1
array.push([1, 'lensQueen']); // 2
console.log('array', array);

// Uso de funciones Array
//lensQueen -> lensQueen001

array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('array', array);