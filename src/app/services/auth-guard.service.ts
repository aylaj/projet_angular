import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core'; //pour se servir du service auth.service deja créé

@Injectable() //ici on injecte le service
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { } //pour le service

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }

  }

}
