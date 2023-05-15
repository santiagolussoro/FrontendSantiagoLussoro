import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  public nombre = 'Santiago Sebastián Lussoro';
  public profesion = 'Full Stack Developer Jr';
  public sobreMi = 'Soy un Full Stack Developer Jr. Mi objetivo es crear aplicaciones web eficientes y de alta calidad, y estoy capacitado para trabajar en todas las capas de una aplicación web, desde el front-end hasta el back-end.';

  public editar() {
    console.log('Botón Editar presionado');
  }
}
