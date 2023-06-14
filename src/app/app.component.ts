import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import Music from './models/music';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  musics$!: Observable<Music[]>;
  searchTerm: Subject<string> = new Subject<string>();

  constructor(private musicService: MusicService) { }

  search(term: string) {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.musics$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.musicService.getMusics(term)),
    );
  }
}
