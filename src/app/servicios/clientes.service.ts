import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';

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
      tap( clientes => this.mensajesService.set({ texto: `Se han recibido ${clientes.length} clientes` })),
      tap( clientes => console.log(clientes) ),
      catchError(this.gestionarErrores<Cliente[]>('getClientes', []))
    );
  }
  
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(api + id).pipe(
      tap( cliente => this.mensajesService.set({ texto : `Obtenido el cliente ${cliente.id}` })),
      catchError(this.gestionarErrores<Cliente>('getCliente'))
    );
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(api + cliente.id, cliente).pipe(
      tap( cliente => this.mensajesService.set({ texto : `Modificando el cliente ${cliente.id}` })),
      catchError(this.gestionarErrores<Cliente>('putCliente'))
    );
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(api + id).pipe(
      tap( cliente => this.mensajesService.set({ texto : `Borrando el cliente ${id}` })),
      catchError(this.gestionarErrores<Cliente>('deleteCliente'))
    );
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(api, cliente).pipe(
      tap( cliente => this.mensajesService.set({ texto : `Añadiendo el cliente ${cliente.id}` })),
      catchError(this.gestionarErrores<Cliente>('postCliente'))
    );
  }

  private gestionarErrores<TipoRecibido>(categoria: string, dato?: TipoRecibido) {
    return (error: any): Observable<TipoRecibido> => { 
      console.error(categoria, dato);

      this.mensajesService.set({ nivel: 'error', texto : `Error al hacer ${categoria}` });

      return of(dato as TipoRecibido);
    }
  }
}
