import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  selector: 'app-heroe-busqueda',
  template: `
    <div id="search-component">
      <label for="search-box">Buscar un héroe</label>
      <input #cajaBusqueda id="search-box" (input)="buscar(cajaBusqueda.value)" />

      <ul class="search-result">
        <li *ngFor="let heroe of heroes$ | async">
          <a routerLink="/heroe-detalles/{{ heroe.id }}">
            {{ heroe.nombre }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      label {
        display: block;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }
      input {
        padding: 0.5rem;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
        display: block;
      }

      input:focus {
        outline: #336699 auto 1px;
      }

      li {
        list-style-type: none;
      }
      .search-result li a {
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        display: inline-block;
        width: 100%;
        max-width: 600px;
        padding: 0.5rem;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
      }

      .search-result li a:hover {
        background-color: #435a60;
        color: white;
      }

      ul.search-result {
        margin-top: 0;
        padding-left: 0;
      }
    `,
  ],
})
export class HeroeBusquedaComponent implements OnInit {
  heroes$!: Observable<Heroe[]>;
  private terminosBusqueda = new Subject<string>();

  constructor(private heroeServicio: HeroeService) {}

  buscar(terminos: string): void {
    this.terminosBusqueda.next(terminos);
  }

  ngOnInit(): void {
    this.heroes$ = this.terminosBusqueda.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((terminos: string) => this.heroeServicio.buscarHeroes(terminos))
    );
  }
}
