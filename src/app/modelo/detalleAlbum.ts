import { Cancion } from "./cancion";
import { Album } from "./album";

export class DetalleAlbum {
    DetalleAlbum: Cancion[]=[];
    album: Album;

    constructor(album: Album) {
        this.DetalleAlbum=[];
        this.album = album;
    }
}