import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', powers: [1, 2, 3] },
      { id: 12, name: 'Narco', powers: [2] },
      { id: 13, name: 'Bombasto', powers: [2] },
      { id: 14, name: 'Celeritas', powers: [3] },
      { id: 15, name: 'Magneta', powers: [] },
      { id: 16, name: 'RubberMan', powers: [] },
      { id: 17, name: 'Dynama', powers: [3] },
      { id: 18, name: 'Dr IQ', powers: [1] },
      { id: 19, name: 'Magma', powers: [2] },
      { id: 20, name: 'Tornado', powers: [3] }
    ];

    const powers = [
      { id: 1, type: 'Flight', description: 'Can fly' },
      { id: 2, type: 'Strength', description: 'Can lift heavy things' },
      { id: 3, type: 'Speed', description: 'Can run fast' },
    ];

    return {heroes, powers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
