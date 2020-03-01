import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class NegativeAuthGuard implements CanActivate {
  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>  {
    const authRedirect: string = route.data.authRedirect;
    console.log(authRedirect)

    return this.userService.isLoggedIn().pipe(
      map(res => {
        if (res) {
          console.log('here1')
          this.router.navigate([authRedirect]);
          return false;
        } else {
          console.log('here2')
          this.router.navigate([authRedirect]);
          return false;
        }
      }),
      catchError(() => {
        console.log('here')
        return of(true);
      })
    );
  }
}
