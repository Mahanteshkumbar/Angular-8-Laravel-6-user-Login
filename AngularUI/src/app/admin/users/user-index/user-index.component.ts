import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRestService } from '../user-rest.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  userList: Array<object> = [];

  constructor(private route: ActivatedRoute, private userRest: UserRestService) { }

  ngOnInit() {
     this.userRest.getUsers().subscribe(
     (response) => { console.log(this.userList = response.user); },
     (error) => { console.log(error) }
    );
  }

  deleteUser(id: number) {
    console.log(id);
  }

  editUser(id: number) {
    console.log(id);
  }
}
