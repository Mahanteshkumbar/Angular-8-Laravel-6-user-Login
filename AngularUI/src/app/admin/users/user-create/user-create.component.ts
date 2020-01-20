import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from '../user-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, private userRest: UserRestService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'confirm_password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('confirm_password'); } 

  registerUser(){
     console.log(this.registerForm);
      this.userRest.storeUser(this.registerForm).subscribe(
        response => {
          console.log(response),
          this.router.navigate(['users'])
        },
        error =>{
          this.serverErrors = error.error.errors
        } 
      );
  }
  
}
