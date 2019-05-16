import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: string[] = [];

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.mensajes.push('Bienvenido');

    this.mensajesService.onMensaje.subscribe(
      mensajeRecibido => this.mensajes.push(mensajeRecibido)
    );
  }

  limpiarMensajes() {
    this.mensajes = [];
  }
}
