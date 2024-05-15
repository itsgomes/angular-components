import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(c => c.HomePage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
