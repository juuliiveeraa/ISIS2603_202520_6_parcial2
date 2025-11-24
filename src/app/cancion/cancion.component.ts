import { Component, Input, output, EventEmitter, Output} from '@angular/core';
import { CancionesService } from '../servicio/canciones.service'
import { AlbumesService } from '../servicio/albumes.service'
import { Cancion } from '../modelo/cancion'
import { Album } from '../modelo/album'

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.css'
})

export class CancionComponent {

  constructor(private cancionesService: CancionesService) {}

  @Input() album: Album[] = [];
  @Output() favoriteCancion = new EventEmitter<Cancion>();

  readonly cancionSeleccionada = output<Cancion>();

  favorite(cancion: Cancion) {
      cancion.loved = true;
    }

}
