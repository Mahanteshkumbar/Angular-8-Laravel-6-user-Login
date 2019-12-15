import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WelcomeLayoutComponent } from './layouts/welcome-layout/welcome-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },{
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},{
    path: 'home',
    component: WelcomeLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/welcome-layout/welcome-layout.module#WelcomeLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
