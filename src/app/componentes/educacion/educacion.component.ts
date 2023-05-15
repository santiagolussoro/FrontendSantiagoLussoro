import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  public isEditable = true;
  public imagenescuela = 'https://drive.google.com/uc?id=1xk2_2BySMeqawtftxC1Se_vOrguXhFiY'
  public escuela = 'Colegio San Agustín';
  public titulo = 'Educación Inicial, Primaria y Secundaria';
  public desdeHasta = '2008 a 2021';
  public imagencurso = 'https://drive.google.com/uc?id=1sntMm_gGEhmFRWy7hQapL2Jhf2ycqfA5'
  public curso = 'Argentina Programa #SeProgramar';
  public titulo1 = 'Curso de programación';
  public desdeHasta1 = 'Mayo 2022 a Julio 2022';
  
  public editar() {
    console.log('Botón Editar presionado');
  }
}
