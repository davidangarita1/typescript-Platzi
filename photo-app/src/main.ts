import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'angarita', 'David', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2021-09', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
