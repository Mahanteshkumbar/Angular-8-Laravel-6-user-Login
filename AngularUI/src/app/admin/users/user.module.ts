import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserRestService } from './user-rest.service';


@NgModule({
  declarations: [UserIndexComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserRestService
  ]
})
export class UserModule { }
