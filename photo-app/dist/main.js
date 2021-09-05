"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'angarita', 'David', true);
const album = new photo_app_1.Album(10, 'Platzi Pictures');
const picture = new photo_app_1.Picture(1, 'TypeScript Course', '2021-09', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
