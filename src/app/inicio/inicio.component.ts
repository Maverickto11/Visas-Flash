import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  contact() {
    // Lógica para contactar, por ejemplo, abrir un formulario o redirigir
    console.log('Contacto iniciado');
  }
}
