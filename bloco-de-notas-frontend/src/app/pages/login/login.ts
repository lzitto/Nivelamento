import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html'
})
export class Login {
  private router = inject(Router);

  fazerLogin(event: Event) {
    event.preventDefault();
    // Navega para a dashboard apenas após o clique do usuário
    this.router.navigate(['/notas']);
  }
}