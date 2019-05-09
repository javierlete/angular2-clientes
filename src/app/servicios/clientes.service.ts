import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../modelo/cliente';
import { CLIENTES } from '../mocks/mock-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
