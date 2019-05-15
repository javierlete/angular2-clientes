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
    return this.http.get<Cliente>(api + id);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    const posicionArray = this.clientes.findIndex(
      clienteRepositorio => clienteRepositorio.id === cliente.id);
    
    this.clientes[posicionArray] = cliente;

    return of(cliente);
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(api + id);
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(api, cliente);
  }
}
