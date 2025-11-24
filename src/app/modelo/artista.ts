export class Artista {
    id: number;
    spotify_id: string;
    name: string;
    image: string;

    constructor(id: number, spotify_id: string, name: string, image: string) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.image = image;
    }
}