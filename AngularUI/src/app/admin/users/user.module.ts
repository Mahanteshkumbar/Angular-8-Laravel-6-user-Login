import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRestService } from './user-rest.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserIndexComponent, UserCreateComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserRestService
  ]
})
export class UserModule { }
