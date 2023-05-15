import { Component } from '@angular/core';

@Component({
  selector: 'app-hard-y-soft-skills',
  templateUrl: './hard-y-soft-skills.component.html',
  styleUrls: ['./hard-y-soft-skills.component.css']
})
export class HardYSoftSkillsComponent {
  public isEditable = true;
  public hardSkill = 'Lenguajes de programación web: HTML, CSS, Angular, Bootstrap, Java, TypeScript.'
  public porcentaje = '85';
  public hardSkill1 = 'Sistemas de gestión de bases de datos: MySQL.';
  public porcentaje1 = '75';
  public softSkill = 'Comunicación efectiva - Habilidad para transmitir información de manera clara y concisa';
  public porcentajeSS = '80';
  public softSkill1 = 'Trabajo en equipo - Habilidad para colaborar con otros para lograr objetivos comunes.';
  public porcentajeSS1 = '77';

  public editar() {
    console.log('Botón Editar presionado');
  }
}
