import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from './heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  opcionesHttp = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {}

  obtenerHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.heroesUrl);
  }

  obtenerHeroe(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.heroesUrl}/${id}`);
  }

  actualizarHeroe(heroe: Heroe): Observable<any> {
    const url = `${this.heroesUrl}/${heroe.id}`;
    return this.http.put(url, heroe, this.opcionesHttp);
  }

  anyadirHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.heroesUrl, heroe, this.opcionesHttp);
  }

  borrarHeroe(id: number): Observable<Heroe> {
    return this.http.delete<Heroe>(`${this.heroesUrl}/${id}`, this.opcionesHttp);
  }

  buscarHeroes(terminos: string): Observable<Heroe[]> {
    if (!terminos.trim()) return of([]);
    return this.http.get<Heroe[]>(`${this.heroesUrl}/?nombre=${terminos}`);
  }
}
