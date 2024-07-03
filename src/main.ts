import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environment/environment';

if (environment.production)
  enableProdMode();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
