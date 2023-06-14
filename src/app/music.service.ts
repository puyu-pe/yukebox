import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import Music from './models/music';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) { }

  getMusics(): Observable<Music[]>{
    return this.http.get<Music[]>('assets/pistas.json').pipe();
  }
}
