import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { AlumnoService } from '../../service/alumno.service';

import { ListadoAlumnosComponent } from '../listado-alumnos/listado-alumnos/listado-alumnos.component';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListadoAlumnosComponent
  ],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  alumnoForm: FormGroup;

  @ViewChild(ListadoAlumnosComponent)
  listadoComponent!: ListadoAlumnosComponent;

  constructor(
    private fb: FormBuilder,
    private alumnoService: AlumnoService
  ) {

    this.alumnoForm = this.fb.group({

      nombre: ['', Validators.required],

      apellido: ['', Validators.required],

      dni: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]]

    });

  }

  guardarAlumno(): void {

    if (this.alumnoForm.invalid) {

      this.alumnoForm.markAllAsTouched();

      return;
    }

    this.alumnoService
      .agregarAlumno(this.alumnoForm.value)
      .subscribe({

        next: (res) => {

          console.log(
            'Alumno guardado con éxito:',
            res
          );

          this.alumnoForm.reset();

          if (this.listadoComponent) {
            this.listadoComponent.cargarAlumnos();
          }

        },

        error: (err) => {

          console.error(
            'Error al guardar alumno:',
            err
          );

        }

      });
  }
}