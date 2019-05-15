import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensaje: string = 'Bienvenido desde el servicio';

  set(texto: string) : void {
    this.mensaje = texto;
  }

  get(): string {
    return this.mensaje;
  }
}
