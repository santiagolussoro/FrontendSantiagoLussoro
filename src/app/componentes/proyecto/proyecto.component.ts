import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  public proyecto = 'Portfolio Web '
  public sobreProyecto = 'He desarrollado una aplicación web full stack que muestra mis datos personales, educación, experiencia laboral, habilidades y proyectos en los que he trabajado. Utilicé una interfaz intuitiva y fácil de usar para mostrar mi información de manera atractiva y fácil de entender para los usuarios. Además, empleé tecnologías modernas y herramientas para garantizar un rendimiento óptimo y una experiencia de usuario fluida. A través de este proyecto, demostré mis habilidades de desarrollo y mi capacidad para crear aplicaciones web atractivas y funcionales.';

  public editar() {
    console.log('Botón Editar presionado');
  }
}
