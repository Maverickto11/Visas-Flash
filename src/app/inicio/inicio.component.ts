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
    const phoneNumber = '593995727820'; // Código de país y número sin el símbolo +
    const message = '¡Hola! Me gustaría ponerme en contacto contigo.'; // Mensaje opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  }
  
}
