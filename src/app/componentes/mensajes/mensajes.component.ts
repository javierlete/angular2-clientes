import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje: string = 'Bienvenido a esta aplicación';
  
  constructor() { }

  ngOnInit() {
  }

}
