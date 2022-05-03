import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRutasModule } from './app-rutas.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './heroes/panel.component';
import { HeroeDetallesComponent } from './heroes/heroe-detalles.component';
import { HeroeBusquedaComponent } from './heroes/heroe-busqueda.component';
import { HeroesListaComponent } from './heroes/heroes-lista.component';
import { BackendAPIService } from './backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListaComponent,
    HeroeDetallesComponent,
    PanelComponent,
    HeroeBusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendAPIService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
