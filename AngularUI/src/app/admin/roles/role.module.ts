import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleIndexComponent } from './role-index/role-index.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleRestService } from './role-rest.service';

@NgModule({
  declarations: [
    RoleIndexComponent, RoleCreateComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule
  ],
  providers: [
    RoleRestService
  ]
})
export class RoleModule { }
