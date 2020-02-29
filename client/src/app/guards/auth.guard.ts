import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, take, catchError} from 'rxjs/operators';
import { corsHeaders } from '../../assets/scripts/auth/connectOptions';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.userService.isLoggedIn().pipe(
      map(res => {
        console.log(res);
        if (res) {
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      })
    );
  }
}
