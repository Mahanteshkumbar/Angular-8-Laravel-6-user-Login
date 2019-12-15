import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  users: Array<{id: number, name: string, email: string}> = [];
  constructor() { }

  getUsers() {
    return this.users = [
      {id: 1, name: 'Mahantesh', email: 'mahantesh@m.com'},
      {id: 2, name: 'Mahantesh', email: 'mahantesh@m.com'},
      {id: 3, name: 'Mahantesh', email: 'mahantesh@m.com'}
    ]
  } 
}
