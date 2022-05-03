import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroe } from './heroes/heroe';

@Injectable({
  providedIn: 'root',
})
export class BackendAPIService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, nombre: 'Superman', poderes: [1, 2, 3] },
      { id: 12, nombre: 'Batman', poderes: [4] },
      { id: 13, nombre: 'Spiderman', poderes: [2, 3] },
      { id: 14, nombre: 'Wonderwoman', poderes: [1, 2, 3] },
      { id: 15, nombre: 'Capitán América', poderes: [2, 3] },
      { id: 16, nombre: 'Ironman', poderes: [1, 2, 3] },
      { id: 17, nombre: 'Lobezno', poderes: [2, 3] },
      { id: 18, nombre: 'Hulk', poderes: [2, 3] },
      { id: 19, nombre: 'Thor', poderes: [2, 3] },
    ];

    const poderes = [
      { id: 1, tipo: 'Volar', descripcion: 'Puede volar' },
      { id: 2, tipo: 'Fuerza', descripcion: 'Puede mover objetos muy pesados' },
      { id: 3, tipo: 'Velocidad', descripcion: 'Puede moverse muy deprisa' },
      { id: 4, tipo: 'Inteligencia', descripcion: 'Es muy inteligente' },
    ];

    return { heroes, poderes };
  }

  genId(heroes: Heroe[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
