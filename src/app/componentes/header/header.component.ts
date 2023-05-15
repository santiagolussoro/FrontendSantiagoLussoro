import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  seEdita= true;

  iniciarSesion(): void {
    this.seEdita = true;

  }

  cerrarSesion(): void {
    this.seEdita = false;
  }
}
