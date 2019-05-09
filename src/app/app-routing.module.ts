import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListadoComponent } from './componentes/clientes-listado/clientes-listado.component';
import { ClientesDetallesComponent } from './componentes/clientes-detalles/clientes-detalles.component';

const routes: Routes = [
  { path: 'clientes/listado', component: ClientesListadoComponent },
  { path: 'clientes/detalles', component: ClientesDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
