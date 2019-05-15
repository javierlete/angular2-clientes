import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje: string;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.mensaje = this.mensajesService.get();
  }

}
