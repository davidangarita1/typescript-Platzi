"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
function showPicture(picture) {
    console.log(`[
        title: ${picture.title}, 
        date: ${picture.date}, 
        orientation: ${picture.orientation}]`);
}
;
let myPic = {
    title: 'Test TItle',
    date: '2021-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2021-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test // Error
});
;
function generatePicture(config) {
    const pic = { title: 'Default', date: '2021-03' };
    if (config.title) {
        pic.title = config.title;
    }
    ;
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
;
let user;
user = { id: 10, username: 'angaritaruiz', isPro: true };
user.username = 'paparazzi';
// user.id = 20; // Error
console.log('user', user);
