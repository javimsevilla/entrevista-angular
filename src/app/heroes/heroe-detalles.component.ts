import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  selector: 'app-heroe-detalles',
  template: `
    <div *ngIf="heroe">
      <h2>{{ heroe.nombre | uppercase }} Detalles</h2>
      <div><span>id: </span>{{ heroe.id }}</div>
      <div>
        <label for="hero-name">Nombre del héroe: </label>
        <input id="hero-name" [(ngModel)]="heroe.nombre" placeholder="nombe" />
      </div>
    </div>

    <button type="button" (click)="volver()">volver</button>
    <button type="button" (click)="guardar()">guardar</button>
  `,
  styles: [``],
})
export class HeroeDetallesComponent implements OnInit {
  heroe?: Heroe;

  constructor(
    private ruta: ActivatedRoute,
    private heroeServicio: HeroeService,
    private localizacion: Location
  ) {}

  ngOnInit(): void {
    this.obtenerHeroe();
  }

  obtenerHeroe(): void {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.heroeServicio.obtenerHeroe(id).subscribe((heroe) => (this.heroe = heroe));
  }

  volver(): void {
    this.localizacion.back();
  }

  guardar(): void {
    if (this.heroe) {
      this.heroeServicio.actualizarHeroe(this.heroe).subscribe(() => this.volver());
    }
  }
}
