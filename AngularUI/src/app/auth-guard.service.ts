import { Injectable } from '@angular/core';
import { Router,RouterStateSnapshot,ActivatedRouteSnapshot,CanActivate,CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { CommonAuthService } from './auth/common-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: CommonAuthService, private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean { 
  	return this.auth.isAuthonticated().then(
  		(authSuccess: boolean) => {
  			if(authSuccess){
  				return true;
  			}else{
  				this.router.navigate(['/home']);
  			}
  	});
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
  	return this.canActivate(route, state);
  }
}
