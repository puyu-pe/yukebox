import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import Music from './models/music';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) { }

  getMusics(search: string): Observable<Music[]>{
    const pattern =  new RegExp(`.*${search ? search : undefined}.*`,'gi');
    return this.http.get<Music[]>('assets/pistas.json').pipe(
      map(musics => musics.filter(music => pattern.test(music.titulo)).slice(0,10))
    );
  }
}
