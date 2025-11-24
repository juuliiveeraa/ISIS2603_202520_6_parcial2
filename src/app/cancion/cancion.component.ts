import { Component, Input, output, EventEmitter, Output} from '@angular/core';
import { CancionesService } from '../servicio/canciones.service'
import { AlbumesService } from '../servicio/albumes.service'
import { Cancion } from '../modelo/cancion'

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.css'
})

export class CancionComponent {

  constructor(private cancionesService: CancionesService) {}

  @Input() canciones: Cancion[] = [];

  readonly cancionSeleccionada = output<Cancion>();

  ngOnInit(): void {
    this.cancionesService.obtenerCanciones().subscribe(list => this.canciones = list);
  }

}
