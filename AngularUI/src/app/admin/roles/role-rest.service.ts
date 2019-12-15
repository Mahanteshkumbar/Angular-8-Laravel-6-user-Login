import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleRestService {
  roleList: Array<{id: number, name: string}> = []
  constructor() { }

  getRoles() {
    return this.roleList = [
      {id: 1, name: 'Admin'},
      {id: 2, name: 'Users'}
    ]
  }

}
