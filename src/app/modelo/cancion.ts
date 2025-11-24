export class Cancion {
    id: number;
    spotify_id: string;
    name: string;
    minutes: number;
    seconds: number;
    loved: boolean = false;

    constructor(id: number, spotify_id: string, name: string, minutes: number, seconds: number) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.minutes = minutes;
        this.seconds = seconds;
        this.loved = false;
    }
}