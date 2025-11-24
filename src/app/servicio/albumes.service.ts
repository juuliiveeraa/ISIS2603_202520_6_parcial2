import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Album } from '../modelo/album'

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  private url = 'http://localhost:8080/albumes';

  constructor(private http: HttpClient) { }

  obtenerAlbumes(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url)
  }
}
