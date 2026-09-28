import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlumnoService,
  Alumno
} from '../../../service/alumno.service';

@Component({
  selector: 'app-listado-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.css'
})
export class ListadoAlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];

  constructor(
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {

    this.alumnoService.listarAlumnos().subscribe({

      next: (data: Alumno[]) => {
        this.alumnos = data;
      },

      error: (err: any) => {
        console.error(
          'Error al obtener la lista de alumnos:',
          err
        );
      }

    });
  }
}