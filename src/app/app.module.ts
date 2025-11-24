import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumesComponent } from './albumes/albumes.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { CancionComponent } from './cancion/cancion.component';
import { DetalleAlbumComponent } from './detalle-album/detalle-album.component';

@NgModule({
  declarations: [AppComponent, AlbumesComponent, ArtistasComponent, CancionComponent, DetalleAlbumComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
