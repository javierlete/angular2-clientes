import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Mensaje } from 'src/app/modelo/mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: Mensaje[] = [];

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.mensajes.push({ nivel: 'info', texto: 'Bienvenido' });

    this.mensajesService.onMensaje.subscribe(
      mensajeRecibido => this.mensajes.push(mensajeRecibido)
    );
  }

  limpiarMensajes() {
    this.mensajes = [];
  }
}
