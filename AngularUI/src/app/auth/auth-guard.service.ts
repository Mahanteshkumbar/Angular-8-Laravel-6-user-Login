import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loggedIn = false;

  constructor() { }

  isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
  				resolve(this.loggedIn);
  			},800);
  		});
  	return promise;
  }

  loggedInUser(){
  console.log("hi");
  	this.loggedIn = true;
  }

  loggedOutUser(){
  	this.loggedIn = false;
  }
}
