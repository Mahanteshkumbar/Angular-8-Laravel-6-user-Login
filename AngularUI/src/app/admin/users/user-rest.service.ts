import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  users: Array<{id: number, name: string, email: string}> = [];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost/laravelAngularApi/public/api/user-list');
    // return this.users = [
    //   {id: 1, name: 'Mahantesh', email: 'mahantesh@m.com'},
    //   {id: 2, name: 'Mahantesh', email: 'mahantesh@m.com'},
    //   {id: 3, name: 'Mahantesh', email: 'mahantesh@m.com'}
    // ]
  } 
}
