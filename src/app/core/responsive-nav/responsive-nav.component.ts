import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-responsive-nav',
  templateUrl: './responsive-nav.component.html',
  styleUrls: ['./responsive-nav.component.css']
})
export class ResponsiveNavComponent implements OnInit, OnDestroy {
  loggedInUser$: Observable<User>;
  currentUser: User;
  // TODO Fix on refresh persistence
  photoUrl: string;
  currentUserSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {
    this.loggedInUser$ = this.authService.getLoggedInUser();
    this.currentUserSubscription = this.loggedInUser$.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.authService.loggedInUserPhotoUrl.subscribe(photoUrl => (this.photoUrl = photoUrl));
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
