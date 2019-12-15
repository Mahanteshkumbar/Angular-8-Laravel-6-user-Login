import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleIndexComponent } from './role-index/role-index.component';
import { RoleCreateComponent } from './role-create/role-create.component';

const routes: Routes = [
  {
    path: '', component: RoleIndexComponent,
    children: [
      {path: 'create', component: RoleCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
