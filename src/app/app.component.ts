import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import Music from './models/music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  musics: Music[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getMusics().subscribe(musics =>  this.musics = musics);
  }
}
