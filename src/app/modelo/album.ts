export class Album {
    id: number;
    spotify_id: string;
    name: string;
    year: string;
    image: string;
    loved: boolean = false;

    constructor(id: number, spotify_id: string, name: string, year: string, image: string) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.year = year;
        this.image = image;
        this.loved = false;
    }
}