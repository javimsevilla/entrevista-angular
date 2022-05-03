import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  selector: 'app-heroes-lista',
  template: `
    <h2>Los Héroes</h2>

    <div>
      <label for="new-hero">Nombre del héroe: </label>
      <input id="new-hero" #heroeNombre />

      <button
        type="button"
        class="add-button"
        (click)="anyadir(heroeNombre.value); heroeNombre.value = ''"
      >
        Añadir héroe
      </button>
    </div>

    <ul class="heroes">
      <li *ngFor="let heroe of heroes">
        <a routerLink="/heroe-detalles/{{ heroe.id }}">
          <span class="badge">{{ heroe.id }}</span> {{ heroe.nombre }}
        </a>
        <button
          type="button"
          class="delete"
          title="borrar héroe"
          (click)="borrar(heroe)"
        >
          &times;
        </button>
      </li>
    </ul>
  `,
  styles: [
    `
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }

      input {
        display: block;
        width: 100%;
        padding: 0.5rem;
        margin: 1rem 0;
        box-sizing: border-box;
      }

      .heroes li {
        position: relative;
        cursor: pointer;
      }

      .heroes li:hover {
        left: 0.1em;
      }

      .heroes a {
        color: #333;
        text-decoration: none;
        background-color: #eee;
        margin: 0.5em;
        padding: 0.3em 0;
        height: 1.6em;
        border-radius: 4px;
        display: block;
        width: 100%;
      }

      .heroes a:hover {
        color: #2c3a41;
        background-color: #e6e6e6;
      }

      .heroes a:active {
        background-color: #525252;
        color: #fafafa;
      }

      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #405061;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        min-width: 16px;
        text-align: right;
        margin-right: 0.8em;
        border-radius: 4px 0 0 4px;
      }

      .add-button {
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        margin-bottom: 2rem;
      }

      .add-button:hover {
        color: white;
        background-color: #42545c;
      }

      button.delete {
        position: absolute;
        left: 210px;
        top: 5px;
        background-color: white;
        color: #525252;
        font-size: 1.1rem;
        margin: 0;
        padding: 1px 10px 3px 10px;
      }

      button.delete:hover {
        background-color: #525252;
        color: white;
      }
    `,
  ],
})
export class HeroesListaComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private heroeServicio: HeroeService
  ) {}

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  obtenerHeroes(): void {
    this.heroeServicio.obtenerHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  anyadir(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) return;
    this.heroeServicio.anyadirHeroe({ nombre: nombre } as Heroe).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  borrar(hero: Heroe): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroeServicio.borrarHeroe(hero.id).subscribe();
  }
}
