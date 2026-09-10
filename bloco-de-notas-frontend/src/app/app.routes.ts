import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Notas } from './pages/notas/notas';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Entra direto no Login!
  { path: 'login', component: Login },
  { path: 'notas', component: Notas }, // Só acessa após autenticar/navegar
  { path: '**', redirectTo: 'login' }
];