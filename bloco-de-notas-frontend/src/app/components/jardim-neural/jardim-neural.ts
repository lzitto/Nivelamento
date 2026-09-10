import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JardimNeural } from '../../models/jardim';

@Component({
  selector: 'app-jardim-neural',
  standalone: true,
  templateUrl: './jardim-neural.html',
  styleUrl: './jardim-neural.css'
})
export class JardimNeuralComponent implements OnInit {
  private http = inject(HttpClient);
  dadosJardim?: JardimNeural;

  ngOnInit(): void {
    this.http.get<JardimNeural>('http://localhost:8080/api/jardim').subscribe({
      next: (data) => this.dadosJardim = data,
      error: (err) => console.error('Erro ao carregar o jardim:', err)
    });
  }
}