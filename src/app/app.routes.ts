import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard-home.component').then(m => m.DashboardHomeComponent)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/dashboard/profile.component').then(m => m.ProfileComponent)
      }
    ]
  }
];
