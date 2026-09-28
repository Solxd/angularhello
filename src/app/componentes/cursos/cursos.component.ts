import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Curso {
  nombre: string;
  duracion: string;
}

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  listaCursos: Curso[] = [];

  nuevoCurso: Curso = {
    nombre: '',
    duracion: ''
  };

  guardarCurso(): void {

    if (
      this.nuevoCurso.nombre &&
      this.nuevoCurso.duracion
    ) {
      this.listaCursos.push({
        ...this.nuevoCurso
      });

      this.nuevoCurso = {
        nombre: '',
        duracion: ''
      };
    }
  }
}