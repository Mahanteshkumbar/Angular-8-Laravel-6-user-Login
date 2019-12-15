import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  constructor(private http: HttpClient) { }

  loggedIn = false;

  registerUser(form: any){
    console.log(form.value);
    return this.http.post('http://localhost/laravelAngularApi/public/api/register', form.value);
  }

   isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }

  logIn(form: any): Observable<any>{
    return this.http.post('http://localhost/laravelAngularApi/public/api/login', form.value);
    //return result;
  }

  logout(token: any): Observable<any>{
    return this.http.post('http://localhost/laravelAngularApi/public/api/logout', {'token': token});
    //return result;
  }
}
