import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelo/cliente';

@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.component.html',
  styleUrls: ['./clientes-listado.component.css']
})
export class ClientesListadoComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(
      (clientesRecibidos: Cliente[]) => this.clientes = clientesRecibidos
    );
  }

  borrar(id: number): void {
    if (confirm(`¿Estás seguro de borrar el registro ${id}?`)) {
      this.clientesService.deleteCliente(id).subscribe(
        idRecibido => this.clientes = this.clientes.filter(
          cliente => cliente.id !== idRecibido)
      )
    }
  }

}
