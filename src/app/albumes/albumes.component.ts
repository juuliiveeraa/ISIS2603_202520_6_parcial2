import { Component, Input, output, EventEmitter, Output} from '@angular/core';
import { AlbumesService } from '../servicio/albumes.service';
import { Album } from '../modelo/album'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css'
})
export class AlbumesComponent {

  constructor(private albumesService: AlbumesService) {}

  @Input() albumes: Album[] = [];

  readonly albumSeleccionado = output<Album>();

  ngOnInit(): void {
    this.albumesService.obtenerAlbumes().subscribe(list => this.albumes = list);
  }

}
