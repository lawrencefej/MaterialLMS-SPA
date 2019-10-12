import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() appHasRole: string[];
  isVisible = false;
  loggedInUser$: Observable<User>;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {
    this.loggedInUser$ = this.authService.getLoggedInUser();
    this.currentUserSubscription = this.loggedInUser$.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    if (!this.currentUser.role) {
      this.viewContainerRef.clear();
    }

    // If the user has the role needed to
    // render this component we can add it
    if (this.appHasRole.includes(this.currentUser.role)) {
      // If it is already visible (which can happen if
      // his roles changed) we do not need to add it a second time
      if (!this.isVisible) {
        // We update the `isVisible` property and add the
        // templateRef to the view using the
        // 'createEmbeddedView' method of the viewContainerRef
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      // If the user does not have the role,
      // we update the `isVisible` property and clear
      // the contents of the viewContainerRef
      this.isVisible = false;
      this.viewContainerRef.clear();
    }
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
