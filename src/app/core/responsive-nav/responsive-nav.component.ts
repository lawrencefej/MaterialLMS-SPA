import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from 'src/app/_services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/_models/user';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

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
