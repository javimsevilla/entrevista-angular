import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './heroes/panel.component';
import { HeroeDetallesComponent } from './heroes/heroe-detalles.component';
import { HeroesListaComponent } from './heroes/heroes-lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
  { path: 'heroe-detalles/:id', component: HeroeDetallesComponent },
  { path: 'heroes', component: HeroesListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRutasModule {}
