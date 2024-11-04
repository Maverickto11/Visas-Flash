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
  name: string = '';
  contactOption: string = 'whatsapp'; // Opción seleccionada: 'whatsapp' o 'email'
  numero: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    if (this.contactOption === 'whatsapp') {
      this.sendWhatsAppMessage();
    } else if (this.contactOption === 'email') {
      this.sendEmailMessage();
    }
  }

  sendWhatsAppMessage() {
    const phoneNumber = '593962581438'; // Número de destino en formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola, soy ${this.name}. ${this.message}`
    )}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  }

  sendEmailMessage() {
    const subject = `Mensaje de ${this.name}`;
    const body = `Hola, soy ${this.name}. ${this.message}`;
    const mailtoLink = `mailto:maverickcordova21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank'); // Abre el cliente de correo en una nueva pestaña
  }
}
