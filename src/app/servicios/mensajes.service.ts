import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Mensaje } from '../modelo/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  onMensaje = new Subject<Mensaje>();

  set(mensaje: Mensaje) : void {
    console.log('#' + mensaje.nivel + '#');
    if(!mensaje.nivel) {
      mensaje.nivel = 'info';
    }
    this.onMensaje.next(mensaje);
  }
}
