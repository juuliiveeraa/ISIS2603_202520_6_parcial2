import { Component, EventEmitter, Input, Output, output} from '@angular/core';
import { Album } from '../modelo/album'

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.component.html',
  styleUrl: './detalle-album.component.css'
})

export class DetalleAlbumComponent {

  @Input() seleccion: {album: Album} []=[];

}
