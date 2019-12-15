import { NgModule } from '@angular/core';

import { WelcomeLayoutRouting } from './welcome-layout-routing.routing';
import { Router, RouterModule } from '@angular/router';
import { CommonAuthModule } from 'app/auth/common-auth.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonAuthModule,
    RouterModule.forChild(WelcomeLayoutRouting)
  ]
})
export class WelcomeLayoutModule { }
