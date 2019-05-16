import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tap } from 'rxjs/operators';

import { Cliente } from '../modelo/cliente';
import { HttpClient } from '@angular/common/http';
import { MensajesService } from './mensajes.service';


const api = 'http://localhost:3000/clientes/'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient,
    private mensajesService: MensajesService
    ) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(api).pipe(
      tap( clientes => this.mensajesService.set(`Se han recibido ${clientes.length} clientes`)),
      tap( clientes => console.log(clientes) )
    );
  }
  
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(api + id);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(api + cliente.id, cliente);
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(api + id);
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(api, cliente);
  }
}
