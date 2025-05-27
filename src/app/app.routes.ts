import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
  { path: 'register', loadComponent: () => import('./pages/registration/registration.component')
    .then(m => m.RegistrationComponent)
  },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
];
