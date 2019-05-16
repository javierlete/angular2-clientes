import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  onMensaje = new Subject<string>();

  set(texto: string) : void {
    this.onMensaje.next(texto);
  }
}
