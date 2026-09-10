import { Component } from '@angular/core';
import { JardimNeuralComponent } from '../../components/jardim-neural/jardim-neural';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [JardimNeuralComponent], // <- Importante colocar o componente aqui!
  templateUrl: './notas.html',
  styleUrl: './notas.css'
})
export class Notas {}