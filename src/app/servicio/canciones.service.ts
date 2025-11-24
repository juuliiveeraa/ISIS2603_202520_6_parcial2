import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Cancion } from '../modelo/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  private url = 'http://localhost:8080/canciones';
  private urlLoveCancion = 'http://localhost:8080/loveTrack?id=idCancion'

  constructor(private http: HttpClient) { }

  obtenerCanciones(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.url);
  }
/*
  favoriteCancion(): Observable<Cancion[]> {
  
  }
*/

}