import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css'
})
export class PreguntasFrecuentesComponent {
  faqs = [
    {
      question: '¿Por qué debería adelantar mi cita con ustedes?',
      answer: [
        '✔️ Velocidad y eficiencia: Nos especializamos en acelerar el proceso para que consigas tu cita rápidamente.',
        '✔️ Gestión completa: Nos encargamos de todo el trámite, solicitando solo la información esencial.',
        '✔️ Flexibilidad en citas: Nos adaptamos a tu disponibilidad, incluso si necesitas una cita a corto plazo.',
        '✔️ Pago seguro en línea: Ofrecemos métodos de pago seguros y accesibles para tu tranquilidad.',
        '✔️ Resultados garantizados: Te ayudamos a obtener la fecha más cercana disponible.'
      ],
      open: true 
    },
    {
      question: '¿Cómo funciona nuestro servicio?',
      answer: [
        '📥 Recibimos tus datos: Incluye correo, contraseña, disponibilidad y ciudad de tu preferencia.',
        '🔍 Iniciamos el monitoreo: Observamos fechas disponibles para adelantar tu cita.',
        '✅ Confirmación: Te notificamos cuando conseguimos la cita adelantada. ¡Tú solo tienes que esperar!',
        '💳 Pago seguro en línea: Puedes elegir entre varios métodos de pago para tu comodidad.'
      ],
      open: false
    },
    {
      question: '¿Cuál es el costo de adelantar mi cita?',
      answer: [
          '📊 Ejemplo:',
          'Si tu cita original es el 30 de diciembre de 2025, y logramos adelantarla al 30 de junio de 2025 (180 días de adelanto):',
          '💵 Costo total = 180 días x $0.50 USD/día = $90 USD'
      ],
      open: false
    }
  ];

  toggleAnswer(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}