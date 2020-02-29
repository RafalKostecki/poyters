import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { corsHeaders } from '../../assets/scripts/auth/connectOptions';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: corsHeaders,
    withCredentials: true
  }

  public userId = new BehaviorSubject<string>('');
  public setUserId(newId: string):void {
    this.userId.next(newId);
  }

  public username = new BehaviorSubject<string>('');
  public setUsername(newUsername: string):void {
    this.username.next(newUsername);
  }

  isLoggedIn():Observable<boolean> {
     return this.http.get<any>('http://localhost:3000/users/profile/', this.httpOptions)
      .pipe(map(response => {
        if (response.userId && response.userId !== '') return true;
        return false;
    }));
  }
}
