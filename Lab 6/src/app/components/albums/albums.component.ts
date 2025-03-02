// src/app/components/albums/albums.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  standalone: false,
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  createAlbum(): void {
    if (!this.newAlbumTitle.trim()) {
      return;
    }
    // Создаем объект нового альбома; userId можно задать фиксированным значением
    const newAlbum = { title: this.newAlbumTitle, userId: 1 };
    this.albumsService.createAlbum(newAlbum).subscribe(createdAlbum => {
      // jsonplaceholder возвращает созданный объект с id
      this.albums.push(createdAlbum);
      this.newAlbumTitle = '';
    });
  }
}
