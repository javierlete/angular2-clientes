import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-detalles',
  templateUrl: './clientes-detalles.component.html',
  styleUrls: ['./clientes-detalles.component.css']
})
export class ClientesDetallesComponent implements OnInit {

  cliente: Cliente = { id: 0, nombre: '', nif: '' };

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = +this.ruta.snapshot.paramMap.get('id');

    console.log(id);

    if (id) {
      this.clientesService.getCliente(id).subscribe(
        cliente => {
          this.cliente = cliente;
          console.log(this.cliente);
        }
      );
    }
  }

  guardar(id: number, nombre: string, nif: string): void {
    let cliente: Cliente = { id: id, nombre: nombre, nif: nif };
    console.log('EMITIDO', cliente);

    if (id) {
      this.clientesService.putCliente(cliente).subscribe(
        cliente => {
          console.log('RECIBIDO', cliente);
          this.router.navigate(['/clientes/listado'])
        }
      );
    } else {
      this.clientesService.postCliente(cliente).subscribe(
        cliente => {
          console.log('RECIBIDO', cliente);
          this.router.navigate(['/clientes/listado'])
        }
      );
    }
  }

}
