import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListadoComponent } from './componentes/clientes-listado/clientes-listado.component';

const routes: Routes = [
  { path: 'clientes/listado', component: ClientesListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
