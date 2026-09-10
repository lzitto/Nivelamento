import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <- MUDE DE 'App' PARA 'AppComponent'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));