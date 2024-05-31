import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.page').then(component => component.HomePage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
