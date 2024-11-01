import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert('Formulario enviado');
  }
}
