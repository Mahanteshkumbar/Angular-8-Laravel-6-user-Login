import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleRestService } from '../role-rest.service';

@Component({
  selector: 'app-role-index',
  templateUrl: './role-index.component.html',
  styleUrls: ['./role-index.component.scss']
})
export class RoleIndexComponent implements OnInit {
  roleList: Array<object> = []; 
  constructor(private route: ActivatedRoute, private roleRest: RoleRestService) { }

  ngOnInit() {
    this.roleList = this.roleRest.getRoles();
  }

  editRole(id: number) {

  }

  deleteRole(id: number) {

  }
}
