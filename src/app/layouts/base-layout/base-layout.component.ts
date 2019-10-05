import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from 'src/app/_services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {
  // loggedInUser$: Observable<User>;
  // currentUser: User;
  // currentUserSubscription: Subscription;

  // isHandset$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(public authService: AuthService) {
                // this.loggedInUser$ = this.authService.getLoggedInUser();
                // this.currentUserSubscription = this.loggedInUser$.subscribe(x => (this.currentUser = x));
                // console.log(this.currentUser);
               }

  ngOnInit() { }

  ngOnDestroy() { }

  // logout() {
  //   this.authService.logout();
  // }

}
