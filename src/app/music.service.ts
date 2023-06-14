import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Music from './models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor() { }

  getMusics(): Observable<Music[]>{
    return of([
    {
      title:"Mientras me curo del cora. Karol G."
    },
    {
      title:"Dejar de Amarte / Sentada en un Bar. Los Rebeldes De la Cumbia."
    },
    {
      title:"TQG. Karol G."
    },
    {
      title:"Abrázame Muy Fuerte (Prod. By Dj Cham) wow popy"
    },
    {
      title:"un x100to. Bad Bunny."
    },
  ]);
  }
}
