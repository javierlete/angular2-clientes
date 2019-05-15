import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../modelo/cliente';
import { HttpClient } from '@angular/common/http';

const api = 'http://localhost:3000/clientes/'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientes: Cliente[];

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(api);
  }
  
  getCliente(id: number): Observable<Cliente> {
    return of(this.clientes.find(cliente => cliente.id === id));
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    const posicionArray = this.clientes.findIndex(
      clienteRepositorio => clienteRepositorio.id === cliente.id);
    
    this.clientes[posicionArray] = cliente;

    return of(cliente);
  }

  deleteCliente(id: number): Observable<number> {
    console.log('ANTES', this.clientes);
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    console.log('DESPUES', this.clientes);
    return of(id);
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(api, cliente);
  }
}
