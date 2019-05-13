import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';

@Component({
  selector: 'app-clientes-detalles',
  templateUrl: './clientes-detalles.component.html',
  styleUrls: ['./clientes-detalles.component.css']
})
export class ClientesDetallesComponent {

  guardar(id: number, nombre: string, nif: string): boolean {
    let cliente: Cliente = { id:id, nombre:nombre, nif:nif };
    console.log(cliente);
    return false;
  }
  
}
