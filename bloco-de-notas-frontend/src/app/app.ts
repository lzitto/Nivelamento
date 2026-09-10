import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JardimNeuralComponent } from './components/jardim-neural/jardim-neural'; // <- IMPORTAR AQUI

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JardimNeuralComponent], // <- ADICIONAR AQUI NO ARRAY
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'bloco-de-notas-frontend';
}