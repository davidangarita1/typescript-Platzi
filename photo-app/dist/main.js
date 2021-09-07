"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'angarita', 'David', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2021-09', photo_orientation_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
user.removeAlbum(album);
console.log('user', user);
