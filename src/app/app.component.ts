import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importar los tres componentes con la ruta correcta
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Agregar los tres componentes al arreglo de imports
  imports: [
    RouterOutlet, 
    AlumnosComponent, 
    CursosComponent, 
    AdministracionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularhello';
}