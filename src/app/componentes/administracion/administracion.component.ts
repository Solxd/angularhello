import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Personal {
  nombre: string;
  cargo: string;
}

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
  listaPersonal: Personal[] = [];
  nuevoPersonal: Personal = { nombre: '', cargo: '' };

  guardarPersonal() {
    if (this.nuevoPersonal.nombre && this.nuevoPersonal.cargo) {
      this.listaPersonal.push({ ...this.nuevoPersonal });
      this.nuevoPersonal = { nombre: '', cargo: '' };
    }
  }
}