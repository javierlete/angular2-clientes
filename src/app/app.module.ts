import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListadoComponent } from './componentes/clientes-listado/clientes-listado.component';
import { ClientesDetallesComponent } from './componentes/clientes-detalles/clientes-detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListadoComponent,
    ClientesDetallesComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
