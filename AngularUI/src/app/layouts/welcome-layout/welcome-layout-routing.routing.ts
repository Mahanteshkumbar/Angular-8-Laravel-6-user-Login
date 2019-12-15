import { Routes } from '@angular/router';
import { CommonAuthModule } from 'app/auth/common-auth.module';

export const WelcomeLayoutRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('../../auth/common-auth.module').then(m => CommonAuthModule)
  }
];

