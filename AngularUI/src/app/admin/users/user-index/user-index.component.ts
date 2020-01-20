import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from '../user-rest.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  userList: Array<object> = [];

  constructor(private route: ActivatedRoute, private userRest: UserRestService, private router: Router) { }

  ngOnInit() {
     this.userRest.getUsers().subscribe(
     (response) => { console.log(this.userList = response.user); },
     (error) => { console.log(error) }
    );
  }

  deleteUser(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.userRest.deleteUser(id).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
  }

  editUser(id: number) {
    this.router.navigate(['users/edit',id]);
  }
}
