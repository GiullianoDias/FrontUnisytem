import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
{ path: 'register', loadComponent: () => import('./pages/registration/registration.component')
  .then(m => m.RegistrationComponent)
},
{ path: '', redirectTo: 'register', pathMatch: 'full' },
{ path: 'loged',
  component: MainLayoutComponent,
  children: [
    { path: 'registerCompany', loadComponent: () => import('./pages/register-company/register-company.component')
      .then(m => m.RegisterCompanyComponent)
    },
    { path: 'registercompany', redirectTo: 'registerCompany' }
  ]
},
];
