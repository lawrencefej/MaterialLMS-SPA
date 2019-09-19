import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public authService: AuthService) { }

  ngOnInit() {
    this.currentUserSubscription = this.authService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
