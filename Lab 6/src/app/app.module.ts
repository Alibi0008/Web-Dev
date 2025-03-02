import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,         // Корневой компонент
    HomeComponent,        // Компонент /home
    AboutComponent,       // Компонент /about
    AlbumsComponent,      // Компонент /albums
    AlbumDetailComponent, // Компонент /albums/:id
    AlbumPhotosComponent  // Компонент /albums/:id/photos
  ],
  imports: [
    BrowserModule,        // Включает CommonModule и базовые возможности
    AppRoutingModule,     // Подключаем маршрутизацию
    HttpClientModule,     // Для запросов к API
    FormsModule           // Для [(ngModel)] и форм
  ],
  providers: [],
  bootstrap: [AppComponent] // Запускаем приложение с AppComponent
})
export class AppModule { }
