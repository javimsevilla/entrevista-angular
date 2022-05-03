import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { HeroeDetallesComponent } from './heroe-detalles.component';
import { HeroesListaComponent } from './heroes-lista.component';

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
