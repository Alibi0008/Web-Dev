import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  standalone: false,
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbum(this.album.id, this.newTitle).subscribe(updatedAlbum => {
      this.album = updatedAlbum;
      alert('Title updated successfully!');
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
