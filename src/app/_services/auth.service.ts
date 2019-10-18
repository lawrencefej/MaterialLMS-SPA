import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = environment.apiUrl + 'auth/';
  decodedToken: any;
  currentUser: Observable<User>;
  private loggedInUser: User;
  private currentUserSubject: BehaviorSubject<User>;
  loggedInUserPhotoUrl = new BehaviorSubject<string>('/src/assets/img/user.png');

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUserSubject.subscribe(x => (this.loggedInUser = x));
  }

  changeMemberPhoto(photoUrl: string) {
    this.loggedInUserPhotoUrl.next(photoUrl);
  }

  login(model: any) {
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user && user.token) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUserSubject.next(user.user);
          this.changeMemberPhoto(this.loggedInUser.photoUrl);
        }

        return user.user;
      })
    );
  }

  register(user: User) {
    return this.http.post(this.baseurl + 'auth/register', user);
  }

  public getLoggedInUser() {
    return this.currentUserSubject.asObservable();
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.decodedToken = null;
    this.currentUser = null;
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  sendForgotPasswordLink(model: any) {
    return this.http.post(this.baseurl + 'forgot-password', model);
  }

  resetPassword(model: any) {
    return this.http.post(this.baseurl + 'reset-password', model);
  }

  isAuthorized(allowedRoles: string[]) {
    // get token from local storage or state management
    const token = localStorage.getItem('token');

    // decode token to read the payload details
    const decodeToken = this.jwtHelper.decodeToken(token);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken.role);
  }
}
