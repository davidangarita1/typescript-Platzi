"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// SUPERclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    ;
    get id() {
        return this._id;
    }
    ;
    /* set id(id: number) {
        this._id = id;
    }; */
    get title() {
        return this._title;
    }
    ;
    set title(title) {
        this._title = title;
    }
    ;
}
;
// get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    ;
    get orientation() {
        return this._orientation;
    }
    ;
    set orientation(orientation) {
        this._orientation = orientation;
    }
    ;
    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
    ;
}
Picture.photoOrientation = PhotoOrientation;
;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // constructor de la superclase
        this.pictures = [];
    }
    ;
    addPicture(picture) {
        this.pictures.push(picture);
    }
    ;
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los mienbros publicos
console.log('picture.id', picture.id);
// picture.id = 100; // private
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; // private
console.log('album', album);
// const item = new Item(1, 'Test title');
// console.log('item', item);
// Probar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
