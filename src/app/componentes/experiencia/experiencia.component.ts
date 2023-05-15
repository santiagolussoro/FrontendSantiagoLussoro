import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  public isEditable = true;
  public imagentrabajo = 'https://drive.google.com/uc?id=1cLzS4benRF3_JmAafxro-j2VauNzmEP2'
  public lugarTrabajo = 'Estudio Lussoro';
  public ocupacion = 'Tareas Administrativas';
  public desdeHastaEL= 'Enero 2022 - Actualidad';

  public editar() {
    console.log('Botón Editar presionado');
  }}
