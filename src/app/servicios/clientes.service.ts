import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../modelo/cliente';
import { CLIENTES } from '../mocks/mock-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Cliente[] = CLIENTES;

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }
  
  deleteCliente(id: number): Observable<number> {
    console.log('ANTES', this.clientes);
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    console.log('DESPUES', this.clientes);
    return of(id);
  }
}
