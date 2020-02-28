import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  private userId: string | null;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.userId.subscribe(newId => this.userId = newId)
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userId && this.userId !== '') {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

}