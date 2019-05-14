import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-detalles',
  templateUrl: './clientes-detalles.component.html',
  styleUrls: ['./clientes-detalles.component.css']
})
export class ClientesDetallesComponent {

  constructor(
    private clientesService: ClientesService,
    private router: Router) {}

  guardar(id: number, nombre: string, nif: string): void {
    let cliente: Cliente = { id:id, nombre:nombre, nif:nif };
    console.log('EMITIDO', cliente);

    this.clientesService.postCliente(cliente).subscribe(
      cliente => {
        console.log('RECIBIDO', cliente);
        this.router.navigate(['/clientes/listado'])
      }
    );
  }
  
}
