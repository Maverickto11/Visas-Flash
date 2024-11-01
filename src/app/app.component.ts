import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { PorQueElegirnosComponent } from './por-que-elegirnos/por-que-elegirnos.component';
import { RequisitosCitaComponent } from "./requisitos-cita/requisitos-cita.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, PorQueElegirnosComponent, RequisitosCitaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'visas-flash';
}
