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

  postCliente(cliente: Cliente): Observable<Cliente> {
    //const clienteMayorId: Cliente  = this.clientes.reduce(
    //  (anterior: any, actual: any) => actual.id > anterior.id ? actual : anterior
    //);
  
    const nuevoId: number = Math.max.apply
      (Math, this.clientes.map(cliente => cliente.id)) + 1;

    //const nuevoId: number = clienteMayorId.id + 1;

    cliente.id = nuevoId;

    this.clientes.push(cliente);

    return of(cliente);
  }
}
