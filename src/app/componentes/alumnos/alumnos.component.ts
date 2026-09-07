import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para formularios sencillos

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  // Objeto para capturar los datos del formulario
  nuevoAlumno = {
    nombre: '',
    edad: null
  };

  // Lista para almacenar los registros
  listaAlumnos: any[] = [];

  // Función que se ejecuta al enviar el formulario
  guardarAlumno() {
    if (this.nuevoAlumno.nombre && this.nuevoAlumno.edad) {
      // Agregamos una copia del objeto a la lista
      this.listaAlumnos.push({ ...this.nuevoAlumno });

      // Limpiamos los campos del formulario
      this.nuevoAlumno.nombre = '';
      this.nuevoAlumno.edad = null;
    }
  }
}